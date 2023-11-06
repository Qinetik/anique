import {Component, JSX} from 'solid-js'

import isPropValid from '@emotion/is-prop-valid'
import {DefaultTheme} from "./theme";

export function isBrowser(){
   return typeof document !== 'undefined'
}

export function isDevelopment() {
    // @ts-ignore
    return process.env.NODE_ENV === "development"
}

export type RefCallback<T> = {
  bivarianceHack(instance: T | null): void
}['bivarianceHack']
export interface RefObject<T> {
  readonly current: T | null
}
export type Ref<T> = RefCallback<T> | RefObject<T> | null

export type ElementType<P = any> =
  | {
      [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K]
        ? K
        : never
    }[keyof JSX.IntrinsicElements]
  | Component<P>

export type Interpolations<Props extends object> = Array<(string | number | object | ((props: Props & { theme: DefaultTheme }) => object))>;


export type StyledElementType<Props> =
  | string
  | Component<Props & { className: string }>

export type StyledOptions = {
  label?: string
  shouldForwardProp?: (str: string) => boolean
  target?: string
}

export interface WithComponentFunction<Props extends object> {

    <T extends keyof JSX.IntrinsicElements>(
        nextTag: T,
        nextOptions?: StyledOptions
    ) : EmotionStyledComponent<Props, JSX.IntrinsicElements[T]>

    <NextElementProps extends object>(
        nextTag: StyledElementType<NextElementProps>,
        nextOptions?: StyledOptions
    ) : StyledComponent<NextElementProps>

}

export type StyledComponent<Props extends object> = Component<Props> & {
  defaultProps: any
  toString: () => string
  withComponent: WithComponentFunction<Props>
}

export type PrivateStyledComponent<Props extends object> = StyledComponent<Props> & {
  __emotion_real: StyledComponent<Props>
  __emotion_base: any
  __emotion_styles: any
  __emotion_forwardProp: any
}

const testOmitPropsOnStringTag = isPropValid
const testOmitPropsOnComponent = (key: string) => key !== 'theme'

export const getDefaultShouldForwardProp = (tag: ElementType) =>
  typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent

export const composeShouldForwardProps = (
  tag: PrivateStyledComponent<any>,
  options: StyledOptions | void,
  isReal: boolean
) => {
  let shouldForwardProp
  if (options) {
    const optionsShouldForwardProp = options.shouldForwardProp
    shouldForwardProp =
      tag.__emotion_forwardProp && optionsShouldForwardProp
        ? (propName: string) =>
            tag.__emotion_forwardProp(propName) &&
            optionsShouldForwardProp(propName)
        : optionsShouldForwardProp
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp
  }

  return shouldForwardProp
}

export type CreateStyledComponent = <Props extends object>(
  ...args: Interpolations<Props>
) => StyledComponent<Props>

export type CreateStyled = {
  <Props extends object>(tag: StyledElementType<Props>, options?: StyledOptions): (
    ...args: Interpolations<Props>
  ) => StyledComponent<Props>
  [key: string]: CreateStyledComponent
  // bind: () => CreateStyled
}

// The following code is inspired by create-emotion-styled

export interface EmotionStyledComponent<Props extends object, InnerProps extends object> extends Component<Props & InnerProps & { class?: string }> {
    withComponent: WithComponentFunction<Props>
}

export type StyledOtherComponent<Props extends object, InnerProps extends object> = EmotionStyledComponent<Props, InnerProps>

// This is type of function that is returned when styled("div") is called
// where T is any element like div
type CallableStyledFunction<T extends keyof JSX.IntrinsicElements> = <Props extends object>(...args: Interpolations<Props>) => EmotionStyledComponent<Props, JSX.IntrinsicElements[T]>

type CreateStyledFunctionTagsAccess = {
    [T in keyof JSX.IntrinsicElements]: CallableStyledFunction<T>;
};

export interface CreateStyledFunction extends CreateStyledFunctionTagsAccess {
  <T extends keyof JSX.IntrinsicElements>(tag: T, options?: StyledOptions): CallableStyledFunction<T>
    <InnerProps extends object>(tag: Component<InnerProps>, options?: StyledOptions): <Props extends object>(...args: Interpolations<Props>) => EmotionStyledComponent<Props, InnerProps>
}
