import{b as l,c as e,g as A,t as C}from"./entry-client-e7f04580.js";import{B as n}from"./index-ce1ffc42.js";import{b as i}from"./index-7a72bcca.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import{r as g}from"./index-505673d9.js";import{I as O}from"./index-99f4859e.js";import"./index-c9b3d057.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import{R as d}from"./index-f5b55317.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const k=C("<h4>Location Services");function y(){const[p,r]=l(!1),[u,s]=l(!1),[m,a]=l(!1),[f,c]=l(!1);return[e(d,{gap:"1em",get children(){return[e(n,{onClick:o=>r(t=>!t),children:"Simple"}),e(n,{onClick:o=>s(t=>!t),children:"With Title Icon"}),e(n,{onClick:o=>a(t=>!t),children:"No Title & Close"}),e(n,{onClick:o=>c(t=>!t),children:"Only Content"})]}}),e(i,{onCloseRequest:()=>r(!1),isVisible:p,title:"Location Services",content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>a(!1),isVisible:m,closeIcon:!1,content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>c(!1),isVisible:f,closeIcon:!1,content:"Would you like to allow location service ?"}),e(i,{onCloseRequest:()=>s(!1),isVisible:u,get title(){return[e(O,{get children(){return e(g,{})}}),(()=>{const o=A(k);return o.style.setProperty("margin","0"),o})()]},content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}})]}y.code=`import {Button} from "@qinetik/anique/button";
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
