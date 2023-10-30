import{b as l,c as e,g as A,t as C}from"./entry-client-2fda6d46.js";import{B as n}from"./index-7a43a4af.js";import{e as i}from"./index-8c496293.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";import{r as g}from"./index-50dde1b3.js";import{I as O}from"./index-d65ca23f.js";import"./index-880dcc90.js";import"./index-e7aa7392.js";import"./index-f62fd80e.js";import"./index-d1f62f4a.js";import"./index-710de314.js";import"./index-a88f9566.js";import"./index-b47d8711.js";import"./index-78db38af.js";import{R as d}from"./index-7a2b10b5.js";import"./index-57b39e9e.js";import"./index-04a91ab9.js";import"./index-31fb525c.js";import"./index-f6060dd8.js";import"./UL-a265d12a.js";import"./index-11ea25b9.js";import"./index-d7a2bb4c.js";import"./index-927437be.js";import"./css-a2b805a8.js";import"./keyframes-489867ef.js";const k=C("<h4>Location Services");function y(){const[u,r]=l(!1),[p,s]=l(!1),[m,a]=l(!1),[f,c]=l(!1);return[e(d,{gap:"1em",get children(){return[e(n,{onClick:o=>r(t=>!t),children:"Simple"}),e(n,{onClick:o=>s(t=>!t),children:"With Title Icon"}),e(n,{onClick:o=>a(t=>!t),children:"No Title & Close"}),e(n,{onClick:o=>c(t=>!t),children:"Only Content"})]}}),e(i,{onCloseRequest:()=>r(!1),isVisible:u,title:"Location Services",content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>a(!1),isVisible:m,closeIcon:!1,content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>c(!1),isVisible:f,closeIcon:!1,content:"Would you like to allow location service ?"}),e(i,{onCloseRequest:()=>s(!1),isVisible:p,get title(){return[e(O,{get children(){return e(g,{})}}),(()=>{const o=A(k);return o.style.setProperty("margin","0"),o})()]},content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}})]}y.code=`import {Button} from "@qinetik/anique/button";
import {AlertDialog} from "@qinetik/anique/dialog";
import {createSignal} from "solid-js";
import {Icon, Row} from "@qinetik/anique";
import {AlertIcon} from "@qinetik/anique-icons";

export default function AlertDialogExamples() {
    
    const [alertOpen, setAlertOpen] = createSignal(false)
    const [alertIconOpen, setAlertIconOpen] = createSignal(false)
    const [alertNoTitle, setAlertNoTitle] = createSignal(false)
    const [alertOnlyContent, setAlertOnlyContent] = createSignal(false)

    return (
        <>
            <Row gap={"1em"}>
                <Button onClick={(e) => setAlertOpen((e) => !e)}>Simple</Button>
                <Button onClick={(e) => setAlertIconOpen((e) => !e)}>With Title Icon</Button>
                <Button onClick={(e) => setAlertNoTitle((e) => !e)}>No Title & Close</Button>
                <Button onClick={(e) => setAlertOnlyContent((e) => !e)}>Only Content</Button>
            </Row>
            <AlertDialog
                onCloseRequest={() => setAlertOpen(false)}
                isVisible={alertOpen}
                title={"Location Services"}
                content={"Would you like to allow location service ?"}
                actions={
                    <Button>Allow</Button>
                }
            />
            <AlertDialog
                onCloseRequest={() => setAlertNoTitle(false)}
                isVisible={alertNoTitle}
                closeIcon={false}
                content={"Would you like to allow location service ?"}
                actions={
                    <Button>Allow</Button>
                }
            />
            <AlertDialog
                onCloseRequest={() => setAlertOnlyContent(false)}
                isVisible={alertOnlyContent}
                closeIcon={false}
                content={"Would you like to allow location service ?"}
            />
            <AlertDialog
                onCloseRequest={() => setAlertIconOpen(false)}
                isVisible={alertIconOpen}
                title={
                    <>
                        <Icon>
                            <AlertIcon/>
                        </Icon>
                        <h4 style={{margin: 0}}>Location Services</h4>
                    </>
                }
                content={"Would you like to allow location service ?"}
                actions={
                    <>
                        <Button>Allow</Button>
                    </>
                }
            />
        </>
    )
}`;export{y as default};
