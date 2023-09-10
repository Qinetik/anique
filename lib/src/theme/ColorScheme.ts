export enum ColorScheme {
    Dark = 0,
    Light = 1
}

export const getSystemColorScheme = (): ColorScheme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ColorScheme.Dark
        : ColorScheme.Light;

export function onSystemColorSchemeChange(onChange: (scheme: ColorScheme) => void) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const themeSetter = () => {
        if (media.matches) {
            onChange(ColorScheme.Dark);
        } else {
            onChange(ColorScheme.Light)
        }
    };
    media.addEventListener('change', themeSetter);
    return () => media.removeEventListener('change', themeSetter);
}