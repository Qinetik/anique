import{c as r,g as t,t as i}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{C as a,a as m}from"./index-14c4e9b6.js";import"./index-01de8884.js";import{C as o}from"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const e=i("<h1>Basic Card"),n=i("<h1>Clickable Card");function p(){return r(o,{get children(){return[t(e),r(a,{children:"Here's my basic card, Its just a div with some styling"}),t(n),r(m,{children:"This makes the card clickable"})]}})}p.code=`import {Card, Column} from "@qinetik/anique";
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
