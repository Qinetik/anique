import{A as i}from"./index-9819aab5.js";import{M as o}from"./Menu-12197ead.js";import{I as t}from"./index-70c7726a.js";import{R as e}from"./index-fe3b8c3b.js";import"./index-123f5b0d.js";import{A as r}from"./Theme-c9d85115.js";import"./index-8e5bd437.js";import{c as n}from"./entry-client-b1cdb755.js";import"./index-b3b79d55.js";import"./index-8f15c368.js";import"./index-69b2c138.js";import"./index-072e3436.js";import"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";function m(){return n(i,{title:"Demo",navIcon:()=>n(t,{get children(){return n(o,{})}}),get actions(){return n(e,{get children(){return[n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}})]}})},get style(){return{background:r.colors.accent100,"border-bottom-left-radius":r.border.lgRadius,"border-bottom-right-radius":r.border.lgRadius}}})}m.code=`import {AppBar} from "@qinetik/anique/appbar";
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
