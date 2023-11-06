import{c as o,P as t,S as r}from"./index-f148c6eb.js";import"./UnstyledLink-f3bad3fa.js";import{B as a,c as s}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import"./index-8e5bd437.js";import"./Theme-c9d85115.js";import"./index-b3b79d55.js";import"./css-b493a813.js";function i(){const n=o();return a(()=>{n.showAlert("Here's the snackbar I promised")}),s(r,{isVisible:()=>!0,get snackbars(){return n.snackbars()},position:()=>t.BottomRight})}i.code=`import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
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
