import{c as t,g as o,t as p}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import{v as n}from"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{C as i}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import{I as r}from"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import{R as m}from"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const s=p("<span>My First Chip"),e=p("<span>My Last Chip");function a(){return t(m,{gap:"1em",get children(){return[t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(s)]}}),t(i,{get children(){return[o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}}),t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}})]}})}a.code=`import {IconButton, Row} from "@qinetik/anique";
import {Chip} from "@qinetik/anique/chip";
import {ChevronUp} from "@qinetik/anique-icons";

export default function ChipWithIconsExample() {
    return (
        <Row gap={"1em"}>
            <Chip>
                <IconButton size={-0.5}>
                    <ChevronUp/>
                </IconButton>
                <span>My First Chip</span>
            </Chip>
            <Chip>
                <span>My Last Chip</span>
                <IconButton size={-0.5} style={{transform: "rotate(180deg)"}}>
                    <ChevronUp/>
                </IconButton>
            </Chip>
            <Chip>
                <IconButton size={-0.5}>
                    <ChevronUp/>
                </IconButton>
                <span>My Last Chip</span>
                <IconButton size={-0.5} style={{transform: "rotate(180deg)"}}>
                    <ChevronUp/>
                </IconButton>
            </Chip>
        </Row>
    )
}`;export{a as default};
