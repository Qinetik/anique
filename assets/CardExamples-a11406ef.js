import{c as r,g as t,t as i}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{C as a,a as m}from"./index-1f767762.js";import"./index-2e914305.js";import{C as o}from"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const e=i("<h1>Basic Card"),n=i("<h1>Clickable Card");function p(){return r(o,{get children(){return[t(e),r(a,{children:"Here's my basic card, Its just a div with some styling"}),t(n),r(m,{children:"This makes the card clickable"})]}})}p.code=`import {Card, Column} from "@qinetik/anique";
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
