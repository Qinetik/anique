import {createContext} from "solid-js";

export enum AniqueStylesInjectionStrategy {

    /**
     * inject into the head element, this works for solid-start but not in Astro
     * The injection is mostly performed on server side
     */
    Assets,

    /**
     * Style element is the sibling of the element that it is intended for
     * like ```<style>.elem { color : red; }</style><div class="elem">I am the element</div>```
     * style element is always before the actual element
     *
     * Please note that caching has not been implemented for this
     */
    Sibling,

}

export interface AniqueStyledEngineConfiguration {

    /**
     * The class name given to all the elements created via styled() & css()
     * You must insert a single alphabet before the hash
     * for example c + hash, Because browser does not allow class names that begin with a number
     * Default : c + hash
     * @param hash is a unique hash given to styles, that can begin with a number
     */
    classNamePattern: (hash: string) => string

    /**
     * The keyframes animation name given
     * You must insert a single alphabet before the hash
     * for example k + hash, Because browser does not allow class names that begin with a number
     * Default : k + hash
     * @param hash is a unique hash given to styles, that can begin with a number
     */
    keyframesPattern: (hash: string) => string

    /**
     * Defines how styles are injected, This happens server side btw
     */
    injectionStrategy: AniqueStylesInjectionStrategy

    /**
     * the nonce prop for the style element
     * default undefined
     */
    nonce?: string

}

export const AniqueStyledEngineContext = createContext<AniqueStyledEngineConfiguration>({
    classNamePattern: (hash: string) => "c" + hash,
    keyframesPattern: (hash: string) => "k" + hash,
    injectionStrategy: AniqueStylesInjectionStrategy.Assets
})