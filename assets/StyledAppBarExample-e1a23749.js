import{A as i}from"./index-55909f5f.js";import{M as o}from"./Menu-4100dfe3.js";import{I as t}from"./index-1cfc4eeb.js";import{R as e}from"./index-4d1252b9.js";import"./index-6427a2f6.js";import{A as r}from"./Theme-c9d85115.js";import"./index-096f9d8e.js";import{c as n}from"./entry-client-23914c21.js";import"./index-d1661098.js";import"./index-58ae8ba7.js";import"./index-99dc85aa.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";function m(){return n(i,{title:"Demo",navIcon:()=>n(t,{get children(){return n(o,{})}}),get actions(){return n(e,{get children(){return[n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}})]}})},get style(){return{background:r.colors.accent100,"border-bottom-left-radius":r.border.lgRadius,"border-bottom-right-radius":r.border.lgRadius}}})}m.code=`import {AppBar} from "@qinetik/anique/appbar";
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
