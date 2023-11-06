import{I as t}from"./index-b3b79d55.js";import{M as e}from"./Menu-12197ead.js";import{g as p}from"./_commonjsHelpers-de833af9.js";import{r as c}from"./web-0a439558.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-8e5bd437.js";import{c as o}from"./entry-client-b1cdb755.js";import"./index-9819aab5.js";import"./index-8f15c368.js";import"./index-69b2c138.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import{R as a}from"./index-fe3b8c3b.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";var r=c;const d=({color:i="currentColor",size:n=24,children:s,...m})=>r.createComponent(r.Dynamic,r.mergeProps({component:"svg"},m,{width:n,height:n,fill:i,viewBox:"0 0 24 24",get children(){return r.createComponent(r.Dynamic,{component:"path",d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"})}}));var u=d;const l=p(u);function f(){return o(a,{get children(){return[o(t,{get children(){return o(e,{})}}),o(t,{fill:"blue",get children(){return o(l,{})}})]}})}f.code=`import {Icon} from "@qinetik/anique/icon";
import Menu from "../../../../solid/icons/Menu";
import AddIcon from "@qinetik/mdi/AddIcon";
import {Row} from "@qinetik/anique";

export default function BasicIconExample() {
    return (
        <Row>
            <Icon>
                <Menu/>
            </Icon>
           <Icon fill={"blue"}>
               <AddIcon />
           </Icon>
        </Row>
    )
}`;export{f as default};
