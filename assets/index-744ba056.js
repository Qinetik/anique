import{s as r}from"./index-326c8233.js";import{A as o}from"./Theme-c9d85115.js";const e=r("table")`

    border-collapse: collapse;
    font-family: sans-serif;
    min-width: 400px;
    border-radius : ${o.border.mdRadius};
    overflow : hidden;

    & thead tr {
        background-color: ${o.colors.primary};
        text-align: left;
    }

    & th, & td {
        padding: 12px 15px;
    }

    & tbody tr {
        border-bottom: 1px solid ${o.colors.bg100};
    }

    & tbody tr:nth-of-type(even) {
        background-color: ${o.colors.bg200};
    }

    & tbody tr:last-of-type {
        border-bottom: 2px solid ${o.colors.primary};
    }

    & tbody tr.active {
        font-weight: bold;
        color: ${o.colors.primary};
    }
    
`;export{e as T};
