type UpBreakpoints = "sm" | "md" | "lg" | "xl"

export type Breakpoint = "xs" | UpBreakpoints;

export interface ThemeBreakpoints {
    up: (key: Breakpoint | number) => string

    down: (key: UpBreakpoints | number) => string

    between: (start: Breakpoint | number, end: Breakpoint | number) => string
}

export class DefaultThemeBreakpoints implements ThemeBreakpoints {

    unit: string = "px"

    step: number = 5

    values: Record<Breakpoint, number> = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
    }

    up = (key: Breakpoint | number) => {
        const value = (key as any) instanceof Number ? key as number : this.values[key as Breakpoint];
        return `@media (min-width:${value}${this.unit})`;
    }

    down = (key: UpBreakpoints | number) => {
        const value = (key as any) instanceof Number ? key as number : this.values[key as Breakpoint];
        return `@media (max-width:${value - this.step / 100}${this.unit})`;
    }

    between = (start: Breakpoint | number, end: Breakpoint | number) => {
        const startValue = (start as any) instanceof Number ? start as number : this.values[start as Breakpoint];
        const endValue = (end as any) instanceof Number ? end as number : this.values[end as Breakpoint];
        return `@media (min-width:${startValue}${this.unit}) and (max-width:${endValue}${this.unit})`;
    }

}