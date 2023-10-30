import{S as n}from"./index-04a91ab9.js";import{R as o}from"./index-7a2b10b5.js";import{c as r}from"./entry-client-2fda6d46.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import"./keyframes-489867ef.js";function e(){return r(o,{gap:"2em",get children(){return[r(n,{}),r(n,{color:"primary"}),r(n,{color:"accent"}),r(n,{color:"error"})]}})}e.code=`import {Spinner} from "@qinetik/anique/spinner";
import {Row} from "@qinetik/anique/row";

export default function SpinnerColorExamples() {
    return (
        <Row gap={"2em"}>
            <Spinner/>
            <Spinner color={"primary"}/>
            <Spinner color={"accent"}/>
            <Spinner color={"error"}/>
        </Row>
    )
}`;export{e as default};
