import{A as i}from"./index-880dcc90.js";import{M as o}from"./Menu-f2088714.js";import{I as t}from"./index-a88f9566.js";import{R as e}from"./index-7a2b10b5.js";import"./index-bb5a5d3d.js";import{A as r}from"./Theme-c9d85115.js";import"./index-50dde1b3.js";import{c as n}from"./entry-client-2fda6d46.js";import"./index-d65ca23f.js";import"./index-8c496293.js";import"./index-7a43a4af.js";import"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-b47d8711.js";import"./index-78db38af.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";function m(){return n(i,{title:"Demo",navIcon:()=>n(t,{get children(){return n(o,{})}}),get actions(){return n(e,{get children(){return[n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}})]}})},get style(){return{background:r.colors.accent100,"border-bottom-left-radius":r.border.lgRadius,"border-bottom-right-radius":r.border.lgRadius}}})}m.code=`import {AppBar} from "@qinetik/anique/appbar";
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
