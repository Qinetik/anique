import {splitProps, ValidComponent} from "solid-js";
import {AsProps} from "./As";

export function splitAsProps<V extends ValidComponent, P extends Record<any, any>, T extends AsProps<V> & P, K extends [readonly (keyof P)[], ...(readonly (keyof T)[])[]]>(props: T, ...keys: K): AsProps<V> {
    return splitProps<T, K>(props, ...keys) as unknown as AsProps<V>
}