import styledImport from './base'
export { ThemeProvider, useTheme } from './theme';

export type { DefaultTheme } from "./theme"

// bind it to avoid mutating the original function
// @ts-ignore
export const styled = styledImport.bind()