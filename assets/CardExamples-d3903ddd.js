import{c as r,g as t,t as i}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import"./index-58ae8ba7.js";import"./index-99dc85aa.js";import{a,C as m}from"./index-70649c9c.js";import{C as o}from"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const e=i("<h1>Basic Card"),n=i("<h1>Clickable Card");function p(){return r(o,{get children(){return[t(e),r(a,{children:"Here's my basic card, Its just a div with some styling"}),t(n),r(m,{children:"This makes the card clickable"})]}})}p.code=`import {Card, Column} from "@qinetik/anique";
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
