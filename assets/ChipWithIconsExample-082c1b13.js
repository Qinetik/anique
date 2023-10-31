import{c as t,g as o,t as p}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";import{v as n}from"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{c as i}from"./index-1f767762.js";import"./index-2e914305.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import{I as r}from"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import{R as m}from"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const s=p("<span>My First Chip"),e=p("<span>My Last Chip");function a(){return t(m,{gap:"1em",get children(){return[t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(s)]}}),t(i,{get children(){return[o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}}),t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}})]}})}a.code=`import {IconButton, Row} from "@qinetik/anique";
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
