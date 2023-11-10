import{c as n,m as c,D as i,b as H,g as p,a as d,i as s,t as m}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import{M as g}from"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import{D as w,M as C}from"./index-c2ccd6b4.js";import"./index-950dbaca.js";import{C as M}from"./index-790f0904.js";import{C as v}from"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import{I as l}from"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import{R as h}from"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const D=({color:r="currentColor",size:t=24,children:o,...e})=>n(i,c({component:"svg"},e,{width:t,height:t,fill:r,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"})}})),P=({color:r="currentColor",size:t=24,children:o,...e})=>n(i,c({component:"svg"},e,{width:t,height:t,fill:r,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M21 7H3V3H21V7M13 19C13 19.7 13.13 20.37 13.35 21H4V8H20V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M15 13V11.5C15 11.22 14.78 11 14.5 11H9.5C9.22 11 9 11.22 9 11.5V13H15M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z"})}})),y=({color:r="currentColor",size:t=24,children:o,...e})=>n(i,c({component:"svg"},e,{width:t,height:t,fill:r,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M16,17H5V7H16L19.55,12M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z"})}})),B=({color:r="currentColor",size:t=24,children:o,...e})=>n(i,c({component:"svg"},e,{width:t,height:t,fill:r,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12L14,5M16,9.83L18.17,12L16,14.17V12.9H14C11.93,12.9 10.07,13.28 8.34,13.85C9.74,12.46 11.54,11.37 14.28,11L16,10.73V9.83Z"})}})),x=({color:r="currentColor",size:t=24,children:o,...e})=>n(i,c({component:"svg"},e,{width:t,height:t,fill:r,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"})}})),O=m("<h3>Card Title"),L=m("<div><!$><!/><!$><!/>"),b=m("<p>Here's an example of dropdown inside a clickable card, Clicking on dropdown menu items doesn't trigger the card click"),$=m("<div>");function A(){const[r,t]=H(!1);function o(e){return a=>{a.stopImmediatePropagation(),e(a)}}return n(M,{onClick:()=>alert("You clicked on the card"),get children(){return n(v,{gap:"0.5em",get children(){return[n(h,{style:{width:"100%"},get children(){return[(()=>{const e=p(O);return e.style.setProperty("margin","0"),e.style.setProperty("flex","1"),e})(),"open dropdown ->",(()=>{const e=p(L),a=e.firstChild,[u,k]=d(a.nextSibling),I=u.nextSibling,[f,V]=d(I.nextSibling);return e.style.setProperty("position","relative"),s(e,n(l,{get onClick(){return o(()=>t(!0))},get children(){return n(g,{})}}),u,k),s(e,n(w,{onCloseRequest:()=>t(!1),isVisible:r,style:{right:0},get children(){return[n(C,{get onClick(){return o(()=>t(!1))},children:"Hello World"}),n(C,{get onClick(){return o(()=>{})},children:"Doesn't Close"})]}}),f,V),e})()]}}),(()=>{const e=p(b);return e.style.setProperty("margin","0"),e})(),n(h,{style:{width:"100%"},get children(){return[n(l,{get onClick(){return o(()=>{})},get children(){return n(B,{})}}),n(l,{get onClick(){return o(()=>{})},get children(){return n(x,{})}}),(()=>{const e=p($);return e.style.setProperty("flex","1"),e})(),n(l,{get onClick(){return o(()=>{})},get children(){return n(P,{})}}),n(l,{get onClick(){return o(()=>{})},get children(){return n(y,{})}}),n(l,{get onClick(){return o(()=>{})},get children(){return n(D,{})}}),n(l,{get onClick(){return o(()=>t(!0))},get children(){return n(g,{})}})]}})]}})}})}A.code=`import {ClickableCard, Column, IconButton, Row} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {MoreVertIcon} from "@qinetik/anique-icons";
import PinIcon from "@qinetik/mdi/PinIcon";
import ArchiveAddIcon from "@qinetik/mdi/ArchiveAddIcon";
import LabelOutlineIcon from "@qinetik/mdi/LabelOutlineIcon";
import ShareOutlineIcon from "@qinetik/mdi/ShareOutlineIcon";
import DeleteOutlineIcon from "@qinetik/mdi/DeleteOutlineIcon";

export default function CardActionsDropdownExample() {

    const [open, setOpen] = createSignal(false)

    type ElementEvent = MouseEvent & { currentTarget: HTMLDivElement, target: Element }

    function onClickDePropagation(onClick: (e: ElementEvent) => void) {
        return (e: ElementEvent) => {
            e.stopImmediatePropagation()
            onClick(e)
        }
    }

    return (
        <ClickableCard onClick={() => alert("You clicked on the card")}>
            <Column gap={"0.5em"}>
                <Row style={{width: "100%"}}>
                    <h3 style={{margin: 0, flex: 1}}>Card Title</h3>
                    open dropdown -&gt;
                    <div style={{position: 'relative'}}>
                        <IconButton onClick={onClickDePropagation(() => setOpen(true))}>
                            <MoreVertIcon/>
                        </IconButton>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                            style={{right: 0}}
                        >
                            <MenuItem onClick={onClickDePropagation(() => setOpen(false))}>Hello World</MenuItem>
                            <MenuItem onClick={onClickDePropagation(() => {
                            })}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                </Row>
                <p style={{margin: 0}}>
                    Here's an example of dropdown inside a clickable card, Clicking on dropdown menu items
                    doesn't trigger the card click
                </p>
                <Row style={{width: "100%"}}>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <ShareOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <div style={{flex: 1}}/>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <ArchiveAddIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <LabelOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {
                    })}>
                        <PinIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => setOpen(true))}>
                        <MoreVertIcon/>
                    </IconButton>
                </Row>
            </Column>
        </ClickableCard>
    )
}`;export{A as default};
