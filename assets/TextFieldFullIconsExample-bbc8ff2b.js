import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import{l as o}from"./index-50dde1b3.js";import{c as n}from"./entry-client-2fda6d46.js";import{I as t}from"./index-d65ca23f.js";import"./index-880dcc90.js";import"./index-8c496293.js";import"./index-7a43a4af.js";import"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import{I as r}from"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import{a as i}from"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import{M as e}from"./Menu-f2088714.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";function m(){return n(i,{get leadingIcon(){return n(t,{get children(){return n(o,{})}})},get trailingIcon(){return n(r,{get children(){return n(e,{})}})},label:"Username",placeholder:"Type Here"})}m.code=`import {Icon} from "@qinetik/anique";
import {InformationBoxOutline} from "@qinetik/anique-icons";
import {IconButton} from "@qinetik/anique/icon-button";
import Menu from "../../../../solid/icons/Menu";
import {TextField} from "@qinetik/anique/textfield";

export default function TextFieldFullIconsExample() {
    return (
        <TextField
            leadingIcon={
                <Icon>
                    <InformationBoxOutline/>
                </Icon>
            }
            trailingIcon={
                <IconButton>
                    <Menu/>
                </IconButton>
            }
            label={"Username"}
            placeholder={"Type Here"}
        />
    )
}`;export{m as default};
