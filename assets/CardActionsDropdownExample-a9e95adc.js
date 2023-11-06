import{c as n,m as a,D as i,b as w,g as m,a as s,i as g,t as d}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import{M as h}from"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{D as M,M as C}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import{C as v}from"./index-70649c9c.js";import{C as P}from"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import{I as l}from"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import{R as I}from"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const y=({color:o="currentColor",size:t=24,children:r,...e})=>n(i,a({component:"svg"},e,{width:t,height:t,fill:o,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"})}})),D=({color:o="currentColor",size:t=24,children:r,...e})=>n(i,a({component:"svg"},e,{width:t,height:t,fill:o,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M21 7H3V3H21V7M13 19C13 19.7 13.13 20.37 13.35 21H4V8H20V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M15 13V11.5C15 11.22 14.78 11 14.5 11H9.5C9.22 11 9 11.22 9 11.5V13H15M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z"})}})),B=({color:o="currentColor",size:t=24,children:r,...e})=>n(i,a({component:"svg"},e,{width:t,height:t,fill:o,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M16,17H5V7H16L19.55,12M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z"})}})),x=({color:o="currentColor",size:t=24,children:r,...e})=>n(i,a({component:"svg"},e,{width:t,height:t,fill:o,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12L14,5M16,9.83L18.17,12L16,14.17V12.9H14C11.93,12.9 10.07,13.28 8.34,13.85C9.74,12.46 11.54,11.37 14.28,11L16,10.73V9.83Z"})}})),O=({color:o="currentColor",size:t=24,children:r,...e})=>n(i,a({component:"svg"},e,{width:t,height:t,fill:o,viewBox:"0 0 24 24",get children(){return n(i,{component:"path",d:"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"})}})),L=d("<h3>Card Title"),A=d("<div><!$><!/><!$><!/>"),$=d("<p>Vite HMR doesn't work with this dropdown in Card Actions, so you need to refresh the page after making a change"),b=d("<div>");function _(){const[o,t]=w(!1);function r(e){return p=>{p.stopImmediatePropagation(),e(p)}}return n(v,{onClick:()=>alert("You clicked on the card"),get children(){return n(P,{gap:"0.5em",get children(){return[n(I,{style:{width:"100%"},get children(){return[(()=>{const e=m(L);return e.style.setProperty("margin","0"),e.style.setProperty("flex","1"),e})(),"open dropdown ->",(()=>{const e=m(A),p=e.firstChild,[u,k]=s(p.nextSibling),f=u.nextSibling,[V,H]=s(f.nextSibling);return e.style.setProperty("position","relative"),g(e,n(l,{onClick:c=>{t(!0),c.stopImmediatePropagation()},get children(){return n(h,{})}}),u,k),g(e,n(M,{onCloseRequest:()=>t(!1),isVisible:o,style:{right:0},get children(){return[n(C,{onClick:c=>{t(!1),c.stopImmediatePropagation()},children:"Hello World"}),n(C,{onClick:c=>c.stopImmediatePropagation(),children:"Doesn't Close"})]}}),V,H),e})()]}}),(()=>{const e=m($);return e.style.setProperty("margin","0"),e})(),n(I,{style:{width:"100%"},get children(){return[n(l,{get onClick(){return r(()=>{})},get children(){return n(x,{})}}),n(l,{get onClick(){return r(()=>{})},get children(){return n(O,{})}}),(()=>{const e=m(b);return e.style.setProperty("flex","1"),e})(),n(l,{get onClick(){return r(()=>{})},get children(){return n(D,{})}}),n(l,{get onClick(){return r(()=>{})},get children(){return n(B,{})}}),n(l,{get onClick(){return r(()=>{})},get children(){return n(y,{})}}),n(l,{get onClick(){return r(()=>t(!0))},get children(){return n(h,{})}})]}})]}})}})}_.code=`import {ClickableCard, Column, IconButton, Row} from "@qinetik/anique";
import {createSignal, JSX} from "solid-js";
import {DropdownMenu, MenuItem} from "@qinetik/anique/dropdown";
import {MoreVertIcon} from "@qinetik/anique-icons";
import PinIcon from "@qinetik/mdi/PinIcon";
import ArchiveAddIcon from "@qinetik/mdi/ArchiveAddIcon";
import LabelOutlineIcon from "@qinetik/mdi/LabelOutlineIcon";
import ShareOutlineIcon from "@qinetik/mdi/ShareOutlineIcon";
import DeleteOutlineIcon from "@qinetik/mdi/DeleteOutlineIcon";

export default function CardActionsDropdownExample() {

    const [open, setOpen] = createSignal(false)

    type ElementEvent = MouseEvent & { currentTarget : HTMLDivElement, target : Element }
    function onClickDePropagation(onClick : (e : ElementEvent) => void) {
        return (e : ElementEvent) => {
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
                        <IconButton onClick={(e) => {
                            setOpen(true)
                            e.stopImmediatePropagation()
                        }}>
                            <MoreVertIcon/>
                        </IconButton>
                        <DropdownMenu
                            onCloseRequest={() => setOpen(false)}
                            isVisible={open}
                            style={{
                                right: 0
                            }}
                        >
                            <MenuItem onClick={(e) => {
                                setOpen(false)
                                e.stopImmediatePropagation()
                            }}>Hello World</MenuItem>
                            <MenuItem onClick={(e) => e.stopImmediatePropagation()}>Doesn't Close</MenuItem>
                        </DropdownMenu>
                    </div>
                </Row>
                <p style={{margin: 0}}>
                    Vite HMR doesn't work with this dropdown in Card Actions, so you need to refresh the page after
                    making a change
                </p>
                <Row style={{width: "100%"}}>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <ShareOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <div style={{ flex : 1 }}/>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <ArchiveAddIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <LabelOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => {})}>
                        <PinIcon/>
                    </IconButton>
                    <IconButton onClick={onClickDePropagation(() => setOpen(true))}>
                        <MoreVertIcon/>
                    </IconButton>
                </Row>
            </Column>
        </ClickableCard>
    )
}`;export{_ as default};
