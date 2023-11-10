import"./index-108c4257.js";import"./Theme-c9d85115.js";import{l as o}from"./index-923cd83d.js";import{c as n}from"./entry-client-c6070623.js";import{I as t}from"./index-ebb683f1.js";import"./index-222b9f4a.js";import"./index-22b1ace7.js";import"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import{I as r}from"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import{a as i}from"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import{M as e}from"./Menu-802480fc.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";function m(){return n(i,{get leadingIcon(){return n(t,{get children(){return n(o,{})}})},get trailingIcon(){return n(r,{get children(){return n(e,{})}})},label:"Username",placeholder:"Type Here"})}m.code=`import {Icon} from "@qinetik/anique";
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
