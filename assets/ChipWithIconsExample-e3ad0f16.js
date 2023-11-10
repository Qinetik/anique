import{c as t,g as o,t as p}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import{v as n}from"./index-a3de9b85.js";import"./index-906196f8.js";import"./index-738815bd.js";import{C as i}from"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import{I as r}from"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import{R as m}from"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";const s=p("<span>My First Chip"),e=p("<span>My Last Chip");function a(){return t(m,{gap:"1em",get children(){return[t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(s)]}}),t(i,{get children(){return[o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}}),t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}})]}})}a.code=`import {IconButton, Row} from "@qinetik/anique";
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
