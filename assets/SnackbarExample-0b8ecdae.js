import{c as o,P as t,S as r}from"./index-eaf0e709.js";import"./UnstyledLink-08d09b7e.js";import{l as a,c as s}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./index-a3de9b85.js";import"./Theme-c9d85115.js";import"./index-906196f8.js";import"./css-6ecff688.js";function i(){const n=o();return a(()=>{n.showAlert("Here's the snackbar I promised")}),s(r,{isVisible:()=>!0,get snackbars(){return n.snackbars()},position:()=>t.BottomRight})}i.code=`import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
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
