import {styled} from "@qinetik/emotion";
import {Anique} from "../theme";

export const MenuItem = styled("div")`

  padding: 0.75em 1em;
  background: ${Anique.colors.bg200};

  cursor: pointer;
  user-select: none;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${Anique.colors.bg300};
  }

  &:active {
    background: ${Anique.colors.bg500};
  }

  &:first-of-type {
    border-top-left-radius: ${Anique.border.smRadius};
    border-top-right-radius: ${Anique.border.smRadius};
  }

  &:last-of-type {
    border-bottom-left-radius: ${Anique.border.smRadius};
    border-bottom-right-radius: ${Anique.border.smRadius};
  }

`