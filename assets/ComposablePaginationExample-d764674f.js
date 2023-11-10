import{a,b as i,c as t}from"./index-498a4fb2.js";import{c as n}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-5056258d.js";function r(){return n(t,{get children(){return n(a,{total:5,children:o=>n(i,{href:"#"+o,children:o})})}})}r.code=`import {PaginationAnchor, PaginationLinks, PaginationRoot} from "@qinetik/anique/pagination";

export default function ComposablePaginationExample() {
    return (
        <PaginationRoot>
            <PaginationLinks total={5}>
                {pageNumber => (
                    <PaginationAnchor href={"#" + pageNumber}>{pageNumber}</PaginationAnchor>
                )}
            </PaginationLinks>
        </PaginationRoot>
    )
}`;export{r as default};
