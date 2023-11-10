import{c as r,g as t,t as i}from"./entry-client-f8a4ae77.js";import"./index-1349e2ee.js";import"./Theme-c9d85115.js";import"./index-9faa6ccb.js";import"./index-e26dcbaa.js";import"./index-c7e055fe.js";import"./index-c2ccd6b4.js";import"./index-950dbaca.js";import{a,C as m}from"./index-790f0904.js";import{C as o}from"./index-459eedf5.js";import"./index-5487e511.js";import"./index-69169d02.js";import"./index-2ccff704.js";import"./index-87c6ec70.js";import"./index-3bfb6c94.js";import"./index-02608a48.js";import"./index-57c7de99.js";import"./index-64764018.js";import"./index-04f85821.js";import"./index-85412099.js";import"./index-cbf5d0c2.js";import"./UnstyledLink-d0c164d4.js";import"./index-b8dd5fd3.js";import"./index-6f1cfc45.js";import"./index-a8521333.js";import"./css-37145586.js";import"./keyframes-5ac2df48.js";const e=i("<h1>Basic Card"),n=i("<h1>Clickable Card");function p(){return r(o,{get children(){return[t(e),r(a,{children:"Here's my basic card, Its just a div with some styling"}),t(n),r(m,{children:"This makes the card clickable"})]}})}p.code=`import {Card, Column} from "@qinetik/anique";
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
