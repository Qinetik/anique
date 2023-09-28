import {styled} from "@qinetik/emotion";
import {OnBgColors} from "../theme/Colors";
import {Anique} from "../theme/Theme";

export const Text = styled("span")<{
    color?: keyof OnBgColors
}>`
  font-family: ${Anique.font.secondary};
  color: ${ p =>
      // @ts-ignore
      Anique.colors[p.color || "onBg"]
  };
`

export const Label = styled(Text)`
  font-size: 0.8rem;
`