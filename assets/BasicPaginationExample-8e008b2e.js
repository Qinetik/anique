import{P as t}from"./index-12602de8.js";import{c as a}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-0ebd6ae5.js";function i(){return a(t,{total:5,current:1,linkProps:n=>({href:"#"+n})})}i.code=`import {Pagination} from "@qinetik/anique/pagination";

export default function BasicPaginationExample() {
    return (
        <Pagination
            total={5}
            current={1}
            linkProps={(pageNumber) => ({
                href: "#" + pageNumber
            })}
        />
    )
}`;export{i as default};
