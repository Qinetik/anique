import{b as a,g as o,a as t,i as s,c as n,e as p,q as d,t as u}from"./entry-client-c6070623.js";import{B as m}from"./index-66667bdf.js";import{D as c}from"./index-22b1ace7.js";import"./index-108c4257.js";import{A as E}from"./Theme-c9d85115.js";import"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import{c as w}from"./css-c6273b18.js";import"./keyframes-2d272afe.js";const z=u("<div><!$><!/><!$><!/>"),h=u("<div><span>Close this one by clicking outside this dialog"),j=u("<div><!$><!/><!$><!/><!$><!/>"),g=l=>w`
    border-radius: 1em;
    background: ${E.colors.bg400};
    box-sizing: border-box;
    padding: ${l||"2em"};
    position: absolute;
    display: flex;
    gap: 1em;
`;function M(){const[l,b]=a(!1),[x,f]=a(!1),[q,$]=a(!1);return(()=>{const i=o(j),k=i.firstChild,[O,v]=t(k.nextSibling),D=O.nextSibling,[C,S]=t(D.nextSibling),I=C.nextSibling,[N,B]=t(I.nextSibling);return s(i,n(m,{onClick:e=>{b(r=>!r)},children:"Open Dialog"}),O,v),s(i,n(c,{onCloseRequest:()=>b(!1),isVisible:l,get children(){return[(()=>{const e=o(z),r=e.firstChild,[_,R]=t(r.nextSibling),V=_.nextSibling,[y,A]=t(V.nextSibling);return s(e,n(m,{onClick:()=>f(!0),children:"Open Nested outside"}),_,R),s(e,n(m,{onClick:()=>$(!0),children:"Open Nested within"}),y,A),p(()=>d(e,g()())),e})(),n(c,{onCloseRequest:()=>$(!1),isVisible:q,get children(){const e=o(h);return p(()=>d(e,g("8em")())),e}})]}}),C,S),s(i,n(c,{onCloseRequest:()=>f(!1),isVisible:x,get children(){const e=o(h);return p(()=>d(e,g("8em")())),e}}),N,B),i})()}M.code=`import {Button} from "@qinetik/anique/button";
import {Dialog} from "@qinetik/anique/dialog";
import {createSignal} from "solid-js";
import {Anique} from "@qinetik/anique";
import {css} from "@qinetik/emotion";

const dialogContent = (padding ?: string) => css\`
    border-radius: 1em;
    background: \${Anique.colors.bg400};
    box-sizing: border-box;
    padding: \${padding || "2em"};
    position: absolute;
    display: flex;
    gap: 1em;
\`

export default function NestedDialogExample() {

    const [is1stOpen, setIs1stOpen] = createSignal(false)
    const [is2ndOpen, setIs2ndOpen] = createSignal(false)
    const [is3rdOpen, setIs3rdOpen] = createSignal(false)

    return (
        <div>
            <Button onClick={(e) => {
                setIs1stOpen(v => !v)
            }}>Open Dialog</Button>

            <Dialog
                onCloseRequest={() => setIs1stOpen(false)}
                isVisible={is1stOpen}
            >
                <div class={dialogContent()()}>
                    <Button onClick={() => setIs2ndOpen(true)}>Open Nested outside</Button>
                    <Button onClick={() => setIs3rdOpen(true)}>Open Nested within</Button>
                </div>

                {/* Nested dialog that is inside the parent dialog */}
                <Dialog
                    onCloseRequest={() => setIs3rdOpen(false)}
                    isVisible={is3rdOpen}
                >
                    <div class={dialogContent("8em")()}>
                        <span>Close this one by clicking outside this dialog</span>
                    </div>
                </Dialog>

            </Dialog>

            {/* Nested dialog that is outside the parent dialog */}
            <Dialog
                onCloseRequest={() => setIs2ndOpen(false)}
                isVisible={is2ndOpen}
            >
                <div class={dialogContent("8em")()}>
                    <span>Close this one by clicking outside this dialog</span>
                </div>
            </Dialog>

        </div>
    )
}`;export{M as default};
