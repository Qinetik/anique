import{A as i}from"./index-b09005ba.js";import{M as o}from"./Menu-03833eb2.js";import{I as t}from"./index-74c14fc3.js";import{R as e}from"./index-fc4b21a7.js";import"./index-e694302e.js";import{A as r}from"./Theme-c9d85115.js";import"./index-149a8a7e.js";import{c as n}from"./entry-client-efb8f723.js";import"./index-299bfccf.js";import"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";function m(){return n(i,{title:"Demo",navIcon:()=>n(t,{get children(){return n(o,{})}}),get actions(){return n(e,{get children(){return[n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}}),n(t,{get children(){return n(o,{})}})]}})},get style(){return{background:r.colors.accent100,"border-bottom-left-radius":r.border.lgRadius,"border-bottom-right-radius":r.border.lgRadius}}})}m.code=`import {AppBar} from "@qinetik/anique/appbar";
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
