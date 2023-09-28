import {JSX} from "solid-js";

export function removeNullStyles(props: JSX.CSSProperties): JSX.CSSProperties {
    const properties: JSX.CSSProperties = {}
    for (const key of Object.keys(props)) {
        // @ts-ignore
        const value = props[key]
        if (value != null) {
            // @ts-ignore
            properties[key] = value
        }
    }
    return properties
}

export function validStylesProp(props: JSX.CSSProperties): { style?: JSX.CSSProperties } {
    const properties = removeNullStyles(props)
    if (Object.keys(properties).length == 0) {
        return {}
    } else {
        return {style: properties}
    }
}