import {createDeferred, createRenderEffect, JSXElement, onCleanup, useContext} from "solid-js";
import {isServer, useAssets} from "solid-js/web";
import {AniqueStyledEngineContext} from "./engine";

const stylesCache = new Map<string, boolean>()

let bundlesRemaining = 0

export function injectStyles(stylesString: string, uniqueHash: string, nonce: string | undefined) {

    if (isServer) {
        createRenderEffect(() => {
            bundlesRemaining++
            // console.log("Render Effect Called", bundlesRemaining)
            if (stylesCache.size == 0) {
                // styleCollectorPrepare()
            }
            if (!stylesCache.get(uniqueHash)) {
                useAssets(() => <style data-server-style={uniqueHash} nonce={nonce}>{stylesString}</style>)
                stylesCache.set(uniqueHash, true)
            } // else {
            //     avoided duplicate style
            // }
        })
        onCleanup(() => {
            if (isServer) {
                stylesCache.clear()
                bundlesRemaining--
                // console.log("on cleanup called", bundlesRemaining)
                if (bundlesRemaining < 1) {
                    // stylesCache.clear()
                    // console.log("bundling styles", bundlesRemaining)
                    // bundleStyles()
                }
            }
        })
    } else {
        let styleEle: HTMLStyleElement | null
        createRenderEffect<{ element: HTMLStyleElement | null }>((prev) => {

            styleEle = document.head.querySelector<HTMLStyleElement>(`[data-style-id="${uniqueHash}"]`)

            if (styleEle == null) {
                styleEle = document.createElement("style")
                styleEle.innerHTML = stylesString
                styleEle.setAttribute("data-style-id", uniqueHash)
                registerStyleElementUsage(styleEle)
                styleEle.nonce = nonce
                document.head.appendChild(styleEle)
            } else {
                registerStyleElementUsage(styleEle)
            }

            if (prev != null && prev.element != null) {
                unregisterStyleElementUsage(prev.element)
            }

            return {
                element: styleEle
            }
        })

        onCleanup(() => {
            if (styleEle) unregisterStyleElementUsage(styleEle)
        })

    }

}

function registerStyleElementUsage(style: HTMLStyleElement) {
    const server = style.getAttribute("data-server-style")
    if(server != null && server != "") return
    let uses = Number(style.getAttribute("data-uses"));
    uses++;
    style.setAttribute("data-uses", uses.toString());
}

function unregisterStyleElementUsage(style: HTMLStyleElement, remove = true) {
    const server = style.getAttribute("data-server-style")
    if(server != null && server != "") return
    let uses = Number(style.getAttribute("data-uses"));
    uses--;
    if (uses <= 0) {
        if (remove) {
            style.remove();
        } else {
            style.setAttribute("data-uses", "0");
        }
    } else {
        style.setAttribute("data-uses", uses.toString());
    }
}