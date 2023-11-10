import"./index-5be97176.js";import"./Theme-c9d85115.js";import{l as o}from"./index-a3de9b85.js";import{c as n}from"./entry-client-fa648c77.js";import{I as t}from"./index-906196f8.js";import"./index-738815bd.js";import"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import{I as r}from"./index-a4a13cad.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-5056258d.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import{a as i}from"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import{M as e}from"./Menu-abd2039e.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";function m(){return n(i,{get leadingIcon(){return n(t,{get children(){return n(o,{})}})},get trailingIcon(){return n(r,{get children(){return n(e,{})}})},label:"Username",placeholder:"Type Here"})}m.code=`import {Icon} from "@qinetik/anique";
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
