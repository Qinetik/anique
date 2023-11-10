import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import{l as o}from"./index-9faa6ccb.js";import{c as n}from"./entry-client-f8a4ae77.js";import{I as t}from"./index-e26dcbaa.js";import"./index-c7e055fe.js";import"./index-c2ccd6b4.js";import"./index-950dbaca.js";import"./index-790f0904.js";import"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import{I as r}from"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import{a as i}from"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import{M as e}from"./Menu-b86ecec2.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";function m(){return n(i,{get leadingIcon(){return n(t,{get children(){return n(o,{})}})},get trailingIcon(){return n(r,{get children(){return n(e,{})}})},label:"Username",placeholder:"Type Here"})}m.code=`import {Icon} from "@qinetik/anique";
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
