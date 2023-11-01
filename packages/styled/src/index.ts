import {keyframes} from './keyframes';
import {css} from './css';
import {createNewStyled} from "./newstyled";

import {baseStyled} from "./baseStyled";
import createGlobalStyle from './createGlobalStyle';
import {tags} from "./tags";

export {ThemeProvider, useTheme} from './theme';
export type {DefaultTheme} from "./theme"

// bind it to avoid mutating the original function
// @ts-ignore
const styled = createNewStyled.bind()

tags.forEach((tagName) => styled[tagName] = styled(tagName))

export {styled, css, keyframes, baseStyled, createGlobalStyle }
export * from "./utils"
export * from "./cache"