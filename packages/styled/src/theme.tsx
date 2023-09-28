import { useContext, createContext, Component } from 'solid-js';

export interface DefaultTheme {

}

const ThemeContext = createContext<() => DefaultTheme>(() => ({}));

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
