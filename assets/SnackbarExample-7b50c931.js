import{c as o,P as t,S as r}from"./index-0e33e01a.js";import"./UL-412bb8d8.js";import{A as a,c as s}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./index-9b146908.js";import"./Theme-c9d85115.js";import"./index-0f3f083d.js";import"./css-884efc55.js";function i(){const n=o();return a(()=>{n.showAlert("Here's the snackbar I promised")}),s(r,{isVisible:()=>!0,get snackbars(){return n.snackbars()},position:()=>t.BottomRight})}i.code=`import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
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
