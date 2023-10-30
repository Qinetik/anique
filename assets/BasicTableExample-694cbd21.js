import{c as n,g as t,t as e}from"./entry-client-2fda6d46.js";import{T as a}from"./index-d7a2bb4c.js";import"./index-bb5a5d3d.js";import"./Theme-c9d85115.js";const r=e("<thead><tr><th>Name</th><th>Points"),d=e("<tbody><tr><td>Dom</td><td>6000</td></tr><tr class=active><td>Melissa</td><td>5150");function o(){return n(a,{get children(){return[t(r),t(d)]}})}o.code=`import {Table} from "@qinetik/anique/table";

export default function BasicTableExample() {
    return (
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Dom</td>
                <td>6000</td>
            </tr>
            <tr class="active">
                <td>Melissa</td>
                <td>5150</td>
            </tr>
            </tbody>
        </Table>
    )
}`;export{o as default};
