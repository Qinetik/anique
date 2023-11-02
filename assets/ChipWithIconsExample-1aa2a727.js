import{c as t,g as o,t as p}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import{v as n}from"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{c as i}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import{I as r}from"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import{R as m}from"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const s=p("<span>My First Chip"),e=p("<span>My Last Chip");function a(){return t(m,{gap:"1em",get children(){return[t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(s)]}}),t(i,{get children(){return[o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}}),t(i,{get children(){return[t(r,{size:-.5,get children(){return t(n,{})}}),o(e),t(r,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return t(n,{})}})]}})]}})}a.code=`import {IconButton, Row} from "@qinetik/anique";
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
