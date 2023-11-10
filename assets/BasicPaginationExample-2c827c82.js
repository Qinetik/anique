import{P as t}from"./index-498a4fb2.js";import{c as a}from"./entry-client-fa648c77.js";import"./index-5be97176.js";import"./Theme-c9d85115.js";import"./index-5056258d.js";function i(){return a(t,{total:5,current:1,linkProps:n=>({href:"#"+n})})}i.code=`import {Pagination} from "@qinetik/anique/pagination";

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
