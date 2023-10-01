import {Component, createContext, useContext} from 'solid-js';

export interface DefaultTheme {

}

let ThemeContextDefault = {}

const ThemeContext = createContext<() => DefaultTheme>(() => (ThemeContextDefault));

export function useTheme(): DefaultTheme {
  return useContext(ThemeContext)();
}

export const ThemeProvider: Component<{theme: () => DefaultTheme, children : any }> = (props) => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  )
};
