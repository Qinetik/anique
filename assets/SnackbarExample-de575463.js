import{c as o,P as t,S as r}from"./index-b8dd5fd3.js";import"./UnstyledLink-d0c164d4.js";import{l as a,c as s}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./index-9faa6ccb.js";import"./Theme-c9d85115.js";import"./index-e26dcbaa.js";import"./css-37145586.js";function i(){const n=o();return a(()=>{n.showAlert("Here's the snackbar I promised")}),s(r,{isVisible:()=>!0,get snackbars(){return n.snackbars()},position:()=>t.BottomRight})}i.code=`import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
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
