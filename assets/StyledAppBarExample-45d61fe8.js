import{A as i}from"./index-738815bd.js";import{M as n}from"./Menu-abd2039e.js";import{I as t}from"./index-a4a13cad.js";import{R as e}from"./index-5056258d.js";import"./index-5be97176.js";import{A as r}from"./Theme-c9d85115.js";import"./index-a3de9b85.js";import{c as o}from"./entry-client-fa648c77.js";import"./index-906196f8.js";import"./index-fb0f364b.js";import"./index-ebcf5fc7.js";import"./index-a21d93e6.js";import"./index-eba976b2.js";import"./index-58fbaa55.js";import"./index-a7e4fca9.js";import"./index-9ecd4929.js";import"./index-2e5e112a.js";import"./index-cf2526ba.js";import"./index-519a8c4a.js";import"./index-87410e23.js";import"./index-2434b60c.js";import"./index-756cf6ab.js";import"./UnstyledLink-08d09b7e.js";import"./index-eaf0e709.js";import"./index-7e475d78.js";import"./index-47d93bee.js";import"./index-498a4fb2.js";import"./css-6ecff688.js";import"./keyframes-f5879c2d.js";function m(){return o(i,{title:"Demo",navIcon:()=>o(t,{get children(){return o(n,{})}}),get actions(){return o(e,{get children(){return[o(t,{get children(){return o(n,{})}}),o(t,{get children(){return o(n,{})}}),o(t,{get children(){return o(n,{})}})]}})},get style(){return{background:r.colors.accent100,"border-bottom-left-radius":r.border.lgRadius,"border-bottom-right-radius":r.border.lgRadius}}})}m.code=`import {AppBar} from "@qinetik/anique/appbar";
import Menu from "../../../../solid/icons/Menu";
import {IconButton} from "@qinetik/anique/icon-button";
import {Row} from "@qinetik/anique/row";
import {Anique} from "@qinetik/anique";

export default function StyledAppBarExample() {
    return (
        <AppBar
            title={"Demo"}
            navIcon={() => (
                <IconButton>
                    <Menu/>
                </IconButton>
            )}
            actions={(
                <Row>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                </Row>
            )}
            style={{
                background: Anique.colors.accent100,
                "border-bottom-left-radius": Anique.border.lgRadius,
                "border-bottom-right-radius": Anique.border.lgRadius,
            }}
        />
    )
}`;export{m as default};
