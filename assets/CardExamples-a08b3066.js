import{c as r,g as t,t as i}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{C as a,a as m}from"./index-b3c017de.js";import"./index-fe490c73.js";import{C as o}from"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const e=i("<h1>Basic Card"),n=i("<h1>Clickable Card");function p(){return r(o,{get children(){return[t(e),r(a,{children:"Here's my basic card, Its just a div with some styling"}),t(n),r(m,{children:"This makes the card clickable"})]}})}p.code=`import {Card, Column} from "@qinetik/anique";
import {ClickableCard} from "@qinetik/anique/card";

export default function CardExamples() {
    return (
        <Column>
            <h1>Basic Card</h1>
            <Card>
                Here's my basic card, Its just a div with some styling
            </Card>
            <h1>Clickable Card</h1>
            <ClickableCard>
                This makes the card clickable
            </ClickableCard>
        </Column>
    )
}`;export{p as default};
