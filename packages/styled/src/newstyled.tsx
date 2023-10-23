import {serializeStyles} from "@emotion/serialize";
import {Component, createMemo, ErrorBoundary, mergeProps} from "solid-js";
import {useTheme} from "./theme";
import {
    composeShouldForwardProps,
    CreateStyledFunction,
    getDefaultShouldForwardProp,
    isBrowser, isDevelopment,
    StyledComponent,
    StyledElementType,
    StyledOptions
} from "./utils";
import {Dynamic, isServer} from "solid-js/web";
import hashFunc from "@emotion/hash"
import {CacheMountChildren, EmotionCacheProvider} from "./cache";

// TODO fix the type here
// @ts-ignore
export const createNewStyled: CreateStyledFunction = (tag: any, options?: StyledOptions) => {

    const isReal = true //tag.__emotion_real === tag
    const baseTag = (isReal && tag.__emotion_base) || tag

    // Figure out what this block of code means
    let identifierName: string | undefined
    let targetClassName: string | undefined
    if (options !== undefined) {
        identifierName = options.label
        targetClassName = options.target
    }

    // Figure out shouldForwardProp
    const shouldForwardProp = composeShouldForwardProps(tag, options, isReal)
    const defaultShouldForwardProp =
        shouldForwardProp || getDefaultShouldForwardProp(baseTag)

    // Return creator function
    return function <Props>(...args: (object | ((props: Props & {theme: any}) => object))[]) {

        // Create Styles
        let styles: any[] = isReal && tag.__emotion_styles !== undefined
                ? tag.__emotion_styles.slice(0)
                : []

        if (identifierName !== undefined) {
            styles.push(`label:${identifierName};`)
        }
        if (args[0] == null || (args as any)[0].raw === undefined) {
            styles.push.apply(styles, args)
        } else {
            if (
                isDevelopment() &&
                (args as any)[0][0] === undefined
            ) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
            }
            styles.push((args as any)[0][0])
            let len = args.length
            let i = 1
            for (; i < len; i++) {
                if (
                    isDevelopment() &&
                    (args as any)[0][i] === undefined
                ) {
                    console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
                }
                styles.push(args[i], (args as any)[0][i])
            }
        }


        type StyledProps = Props & { class?: string }


        // The Actual Component That User Will Use & It Will Emit HTML
        const Styled = (props : StyledProps) => {

            // figure out the tag to use
            const finalTag = baseTag

            // The actual work
            // serializing styles
            const serialized = createMemo(() => {

                let mergedProps: Record<string, any> = mergeProps(
                    props,
                    {
                        get theme() {return useTheme()}
                    }
                )

                return serializeStyles(
                    styles,
                    undefined,
                    mergedProps
                )

            })

            // new props
            const newProps: Record<string, any> = props

            const serStyles = serialized()
            const hashName = hashFunc(serStyles.styles)
            const name = "c" + hashName
            const className = name

            // returning the component
            return (
                <EmotionCacheProvider>
                    <CacheMountChildren uniqueKey={hashName} >
                        <style>{`.${name}{${serStyles.styles}}`}</style>
                    </CacheMountChildren>
                    <ErrorBoundary fallback={(e,reset) => {
                        console.error("error making dynamic component in styled -> base " + isServer,e)
                        return e + " isBrowser = " + isBrowser() + " tag = " + finalTag
                    }}>
                        <Dynamic
                            component={finalTag}
                            {...newProps}
                            class={
                                props.class ? `${className} ${props.class}` : className
                            }
                        />
                    </ErrorBoundary>
                </EmotionCacheProvider>
            )


        }


        // Returning the Created Styled Component To The User
        ;(Styled as any).__emotion_base = baseTag
        ;(Styled as any).__emotion_styles = styles
        ;(Styled as any).__emotion_forwardProp = shouldForwardProp

        Object.defineProperty(Styled, 'toString', {
            value() {
                if (
                    targetClassName === undefined &&
                    isDevelopment()
                ) {
                    return 'NO_COMPONENT_SELECTOR'
                }
                return `.${targetClassName}`
            },
        })

        // Allow creating a duplicate component with a different tag
        ;(Styled as any).withComponent = (
            nextTag: StyledElementType<Props>,
            nextOptions?: StyledOptions
        ) => {
            // TODO fix the type here
            // @ts-ignore
            return createNewStyled(nextTag, {
                ...options,
                ...nextOptions,
                shouldForwardProp: composeShouldForwardProps(
                    Styled as any,
                    nextOptions,
                    true
                ),
            })(
                // @ts-ignore
                ...styles
            )
        }

        return Styled as Component<StyledProps>


    }

}

// Errors that user can encounter
const ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`
