import{b as l,c as e,g as A,t as C}from"./entry-client-efb8f723.js";import{B as n}from"./index-01de8884.js";import{e as i}from"./index-14c4e9b6.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import{r as g}from"./index-149a8a7e.js";import{I as O}from"./index-299bfccf.js";import"./index-b09005ba.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import{R as d}from"./index-fc4b21a7.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const k=C("<h4>Location Services");function y(){const[u,r]=l(!1),[p,s]=l(!1),[m,a]=l(!1),[f,c]=l(!1);return[e(d,{gap:"1em",get children(){return[e(n,{onClick:o=>r(t=>!t),children:"Simple"}),e(n,{onClick:o=>s(t=>!t),children:"With Title Icon"}),e(n,{onClick:o=>a(t=>!t),children:"No Title & Close"}),e(n,{onClick:o=>c(t=>!t),children:"Only Content"})]}}),e(i,{onCloseRequest:()=>r(!1),isVisible:u,title:"Location Services",content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>a(!1),isVisible:m,closeIcon:!1,content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}}),e(i,{onCloseRequest:()=>c(!1),isVisible:f,closeIcon:!1,content:"Would you like to allow location service ?"}),e(i,{onCloseRequest:()=>s(!1),isVisible:p,get title(){return[e(O,{get children(){return e(g,{})}}),(()=>{const o=A(k);return o.style.setProperty("margin","0"),o})()]},content:"Would you like to allow location service ?",get actions(){return e(n,{children:"Allow"})}})]}y.code=`import {Button} from "@qinetik/anique/button";
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
