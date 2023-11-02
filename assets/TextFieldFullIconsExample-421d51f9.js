import"./index-e694302e.js";import"./Theme-c9d85115.js";import{l as o}from"./index-149a8a7e.js";import{c as n}from"./entry-client-efb8f723.js";import{I as t}from"./index-299bfccf.js";import"./index-b09005ba.js";import"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import{I as r}from"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import{a as i}from"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import{M as e}from"./Menu-03833eb2.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";function m(){return n(i,{get leadingIcon(){return n(t,{get children(){return n(o,{})}})},get trailingIcon(){return n(r,{get children(){return n(e,{})}})},label:"Username",placeholder:"Type Here"})}m.code=`import {Icon} from "@qinetik/anique";
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
