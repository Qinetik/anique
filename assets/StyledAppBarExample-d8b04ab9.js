import{A as i}from"./index-41256d2f.js";import{M as o}from"./Menu-7421c823.js";import{I as t}from"./index-1573e59b.js";import{R as e}from"./index-b49aba21.js";import"./index-755bc77f.js";import{A as r}from"./Theme-c9d85115.js";import"./index-9b146908.js";import{c as n}from"./entry-client-a96cbc4d.js";import"./index-0f3f083d.js";import"./index-b3c017de.js";import"./index-fe490c73.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";function m(){return n(i,{title:"Demo",navIcon:()=>n(t,{get children(){return n(o,{})}}),get actions(){return n(e,{get children(){return[n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}})]}})},get style(){return{background:r.colors.accent100,"border-bottom-left-radius":r.border.lgRadius,"border-bottom-right-radius":r.border.lgRadius}}})}m.code=`import {AppBar} from "@qinetik/anique/appbar";
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
