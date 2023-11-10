import{c as t,g as o,t as p}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import{v as n}from"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import{C as i}from"./index-22b1ace7.js";import"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import{I as r}from"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import{R as m}from"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";const s=p("<span>My First Chip"),e=p("<span>My Last Chip");function a(){return t(m,{gap:"1em",get children(){return[t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(s)]}}),t(i,{get children(){return[o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}}),t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}})]}})}a.code=`import {IconButton, Row} from "@qinetik/anique";
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
