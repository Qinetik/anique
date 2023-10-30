import{b as l,c as e,g as A,t as C}from"./entry-client-a96cbc4d.js";import{B as n}from"./index-fe490c73.js";import{e as i}from"./index-b3c017de.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import{r as g}from"./index-9b146908.js";import{I as O}from"./index-0f3f083d.js";import"./index-41256d2f.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import{R as d}from"./index-b49aba21.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const k=C("<h4>Location Services");function y(){const[u,r]=l(!1),[p,s]=l(!1),[m,a]=l(!1),[f,c]=l(!1);return[e(d,{gap:"1em",get children(){return[e(n,{onClick:o=>r(t=>!t),children:"Simple"}),e(n,{onClick:o=>s(t=>!t),children:"With Title Icon"}),e(n,{onClick:o=>a(t=>!t),children:"No Title & Close"}),e(n,{onClick:o=>c(t=>!t),children:"Only Content"})]}}),e(i,{onCloseRequest:()=>r(!1),isVisible:u,title:"Location Services",content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>a(!1),isVisible:m,closeIcon:!1,content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>c(!1),isVisible:f,closeIcon:!1,content:"Would you like to allow location service ?"}),e(i,{onCloseRequest:()=>s(!1),isVisible:p,get title(){return[e(O,{get children(){return e(g,{})}}),(()=>{const o=A(k);return o.style.setProperty("margin","0"),o})()]},content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}})]}y.code=`import {Button} from "@qinetik/anique/button";
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
