import { CSSInterpolation, SerializedStyles } from "@emotion/serialize";


export function newStyled(tag : string | any) : (
    template: TemplateStringsArray,
    ...args: Array<CSSInterpolation>
) => SerializedStyles {

}