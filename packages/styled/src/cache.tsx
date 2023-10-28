import {createContext, ParentProps, useContext} from "solid-js";

const CACHE_NULL_NOT_PRESENT_ERR = "Emotion Cache should not be null, You haven't used Emotion Cache Provider As Parent of Cache Mount Children"

interface CachedItemProperties {
    hasMountedBefore: boolean
}

function createCache(): Map<string, CachedItemProperties> {
    return new Map()
}

let EmotionCacheContext = /* #__PURE__ */ createContext(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    createCache()
)

export function EmotionCacheProvider(props: ParentProps) {
    let cache = useContext(EmotionCacheContext)
    if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache()
        return (
            // @ts-ignore
            <EmotionCacheContext.Provider value={cache}>
                {props.children}
            </EmotionCacheContext.Provider>
        )
    } else {
        return props.children
    }
}

// TODO Unimplemented

export function CacheMountChildren(props: ParentProps<{ uniqueKey: string }>) {
    // let cache = useContext(EmotionCacheContext)
    // if(cache == null){
    //     if(isDevelopment()){
    //         throw new Error(CACHE_NULL_NOT_PRESENT_ERR)
    //     } else {
    //         console.error(CACHE_NULL_NOT_PRESENT_ERR)
    //     }
    // }

    return props.children

    // if(cache != null) {
    //
    //     const item = cache.get(props.uniqueKey)
    //
    //     const setCached = (value : boolean) => cache.set(props.uniqueKey, { hasMountedBefore : value })
    //
    //     if(isBrowser()){
    //
    //         setCached(true)
    //
    //     } else {
    //
    //     }
    //
    //     if (item != null && item.hasMountedBefore) {
    //         // if(isDevelopment()){
    //         //     console.log("Avoided mounting because cached "+ props.uniqueKey)
    //         // }
    //     } else {
    //
    //         return props.children
    //     }
    // } else {
    //     return props.children
    // }
}