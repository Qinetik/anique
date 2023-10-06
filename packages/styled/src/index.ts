import {keyframes} from './keyframes';
import {css} from './css';
import {createNewStyled} from "./newstyled";

import {baseStyled} from "./baseStyled";
import {mountedStyles} from './mountedStyles';
import createStyled from "./base";

export {ThemeProvider, useTheme} from './theme';


export type {DefaultTheme} from "./theme"

// bind it to avoid mutating the original function
// @ts-ignore
const styled = createNewStyled.bind()

export {styled, css, keyframes, baseStyled, mountedStyles, createStyled as oldStyled}
export * from "./utils"