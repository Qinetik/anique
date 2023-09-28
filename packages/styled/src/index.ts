import styledImport from './base'
import { keyframes } from './keyframes';
import { css } from './css';
import {createNewStyled} from "./newstyled";
export { ThemeProvider, useTheme } from './theme';


export type { DefaultTheme } from "./theme"

// bind it to avoid mutating the original function
// @ts-ignore
const styled = createNewStyled.bind()

export { styled, css, keyframes }