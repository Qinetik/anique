import {keyframes} from './keyframes';
import {css} from './css';
import {createNewStyled} from "./newstyled";
import {mountedStyles} from './mountedStyles';

export { ThemeProvider, useTheme } from './theme';


export type { DefaultTheme } from "./theme"

// bind it to avoid mutating the original function
// @ts-ignore
const styled = createNewStyled.bind()

export { styled, css, keyframes, mountedStyles }
export * from "./utils"