import{c as i,g as t,t as r}from"./entry-client-efb8f723.js";import{d as n}from"./index-14c4e9b6.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import{v as p}from"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import{I as e}from"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import{R as o}from"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const a=r("<span>My First Chip"),m=r("<span>My Second Chip"),l=r("<span>My Third Chip"),c=r("<span>My Last Chip");function C(){return i(o,{gap:"1em",get children(){return[i(n,{get children(){return t(a)}}),i(n,{variation:"primary",get children(){return t(m)}}),i(n,{variation:"accent",get children(){return t(l)}}),i(n,{get children(){return[i(e,{size:-.5,get children(){return i(p,{})}}),t(c),i(e,{size:-.5,style:{transform:"rotate(180deg)"},get children(){return i(p,{})}})]}})]}})}C.code=`import {ClickableChip} from "@qinetik/anique/chip";
import {IconButton, Row} from "@qinetik/anique";
import {ChevronUp} from "@qinetik/anique-icons";

export default function ClickableChipExample() {
    return (
        <Row gap={"1em"}>
            <ClickableChip>
                <span>My First Chip</span>
            </ClickableChip>
            <ClickableChip variation={"primary"}>
                <span>My Second Chip</span>
            </ClickableChip>
            <ClickableChip variation={"accent"}>
                <span>My Third Chip</span>
            </ClickableChip>
            <ClickableChip>
                <IconButton size={-0.5}>
                    <ChevronUp/>
                </IconButton>
                <span>My Last Chip</span>
                <IconButton size={-0.5} style={{transform: "rotate(180deg)"}}>
                    <ChevronUp/>
                </IconButton>
            </ClickableChip>
        </Row>
    )
}`;export{C as default};
