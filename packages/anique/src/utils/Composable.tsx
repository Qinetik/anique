import {createContext, JSX, JSXElement, ParentProps, useContext} from "solid-js";

type ValueOf<T> = T[keyof T];

type ComposableFunctions<PK extends string, PV extends string, T extends Record<PK, PV>> = {
    [K in keyof T]: (props : ParentProps) => JSX.Element;
};

export type ComposableComponent<Props, PK extends string, PV extends string, ComposableProps extends Record<PK, PV>> = ComposableFunctions<PK, PV, ComposableProps> & {
    Root : (props : ParentProps<Omit<Props, ValueOf<ComposableProps>>>) => JSX.Element
}

export function createComposableComponent<Props, PK extends string, PV extends string, ComposableProps extends Record<PK, PV>>(parameters : ComposableProps, component : (props : Props) => JSX.Element) : ComposableComponent<Props, PK, PV, ComposableProps> {

    let Context = createContext<Record<ValueOf<ComposableProps>, (props : ParentProps) => JSXElement>>()

    const Evaluator = (props : ParentProps<Omit<Props, keyof ComposableProps>>) => {
        let params = useContext(Context)
        return component({ ...props, ...params })
    }

    const Root = (props : ParentProps<Omit<Props, keyof ComposableProps>>) => {
        const ParameterMap : Record<string, (props : ParentProps) => JSXElement> = {}
        return (
            <Context.Provider value={ParameterMap}>
                {props.children}
                <Evaluator {...props} />
            </Context.Provider>
        )
    }

    let ComposableParametricFunctions : Record<keyof ComposableProps, (props : ParentProps) => JSXElement> = {}

    for(const key in parameters){
        ComposableParametricFunctions[key] = (props) => {
            const context = useContext(Context)
            if(context == null){
                throw new Error(`${key} Component must be wrapped in its Root Component`)
            }
            context[parameters[key]] = () => props.children
            return null
        }
    }

    return {
        Root : Root,
        ...ComposableParametricFunctions
    }
}
