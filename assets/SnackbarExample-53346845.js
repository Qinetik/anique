import{c as o,P as t,S as r}from"./index-11ea25b9.js";import"./UL-a265d12a.js";import{A as a,c as s}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./index-50dde1b3.js";import"./Theme-c9d85115.js";import"./index-d65ca23f.js";import"./css-a2b805a8.js";function i(){const n=o();return a(()=>{n.showAlert("Here's the snackbar I promised")}),s(r,{isVisible:()=>!0,get snackbars(){return n.snackbars()},position:()=>t.BottomRight})}i.code=`import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
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
