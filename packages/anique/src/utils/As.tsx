import {Dynamic, DynamicProps} from "solid-js/web";
import {createEffect, JSX, JSXElement, splitProps, ValidComponent} from "solid-js";
import {splitAsProps} from "./splitter";
import {CSSObject} from "../styled";

export type AsProps<T extends ValidComponent> = Omit<DynamicProps<T>, "component"> & {
    as?: T
}

export type DefaultedAsProps<T extends ValidComponent, K extends ValidComponent> = AsProps<T> & {
    def: K
}

export function As<T extends ValidComponent, K extends ValidComponent>(props: DefaultedAsProps<T, K>) {
    return (
        <Dynamic
            component={props.as || props.def}
            {...splitAsProps(props, ["as", "def"])[1]}
        />
    )
}



export type StyledAsProps<T extends ValidComponent, K extends ValidComponent> = DefaultedAsProps<T, K> & {
    css: CSSObject
}

export function StyledAs<T extends ValidComponent, K extends ValidComponent>(props: StyledAsProps<T, K>) {
    const CSSEle = props.css.StyleElement
    return (
        <>
            <CSSEle/>
            <As
                class={props.css.getClassName() + (" " + (props["class"] || ""))}
                {...splitAsProps(props, ["css", "class"])[1]}
            />
        </>
    )
}