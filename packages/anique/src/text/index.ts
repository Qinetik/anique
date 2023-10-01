import {styled} from "@qinetik/emotion";
import {OnBgColors} from "../theme/Colors";
import {Anique} from "../theme/Theme";
import {StyledOtherComponent} from "@qinetik/emotion/src/utils";
import {JSX} from "solid-js";

export const Text: StyledOtherComponent<{ color?: keyof OnBgColors }, JSX.IntrinsicElements["span"]> = styled("span")<{
    color?: keyof OnBgColors
}>`
  font-family: ${Anique.font.secondary};
  color: ${ p =>
      // @ts-ignore
      Anique.colors[p.color || "onBg"]
  };
`

export const Label: StyledOtherComponent<object, { color?: keyof OnBgColors } & JSX.HTMLAttributes<HTMLSpanElement> & {
    as?: string;
    class?: string
}> = styled(Text)`
  font-size: 0.8rem;
`