import{c as o,P as t,S as r}from"./index-760a4f67.js";import"./UL-e6a4a899.js";import{A as a,c as s}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./index-bab6a310.js";import"./Theme-c9d85115.js";import"./index-c5bef6b0.js";import"./css-e90cefea.js";function i(){const n=o();return a(()=>{n.showAlert("Here's the snackbar I promised")}),s(r,{isVisible:()=>!0,get snackbars(){return n.snackbars()},position:()=>t.BottomRight})}i.code=`import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
import {Position} from "@qinetik/anique/utils";
import {onMount} from "solid-js";

export default function SnackbarExample() {

    const snackbars = createSnackbars()

    onMount(() => {
        snackbars.showAlert("Here's the snackbar I promised")
    })

    return (
        // Use SolidJS Portal Component to Insert in the Body
        <SnackbarHost
            isVisible={() => true}
            snackbars={snackbars.snackbars()}
            position={() => Position.BottomRight}
        />
    )

}`;export{i as default};
