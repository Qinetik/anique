import{b as l,c as e,g as A,t as C}from"./entry-client-2ac2a0bd.js";import{B as n}from"./index-2e914305.js";import{e as i}from"./index-1f767762.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";import{r as g}from"./index-049cff28.js";import{I as O}from"./index-9f77492a.js";import"./index-5cdee6ed.js";import"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import{R as d}from"./index-a7d06282.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const k=C("<h4>Location Services");function y(){const[u,r]=l(!1),[p,s]=l(!1),[m,a]=l(!1),[f,c]=l(!1);return[e(d,{gap:"1em",get children(){return[e(n,{onClick:o=>r(t=>!t),children:"Simple"}),e(n,{onClick:o=>s(t=>!t),children:"With Title Icon"}),e(n,{onClick:o=>a(t=>!t),children:"No Title & Close"}),e(n,{onClick:o=>c(t=>!t),children:"Only Content"})]}}),e(i,{onCloseRequest:()=>r(!1),isVisible:u,title:"Location Services",content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>a(!1),isVisible:m,closeIcon:!1,content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>c(!1),isVisible:f,closeIcon:!1,content:"Would you like to allow location service ?"}),e(i,{onCloseRequest:()=>s(!1),isVisible:p,get title(){return[e(O,{get children(){return e(g,{})}}),(()=>{const o=A(k);return o.style.setProperty("margin","0"),o})()]},content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}})]}y.code=`import {Button} from "@qinetik/anique/button";
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
