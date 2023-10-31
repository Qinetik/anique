import{R as i}from"./index-a7d06282.js";import{S as n}from"./UL-ae71d882.js";import{c as r}from"./entry-client-2ac2a0bd.js";import{T as t}from"./index-0f5f71d8.js";import{C as s}from"./index-756d1732.js";import{s as d}from"./index-6df8a466.js";import{A as o}from"./Theme-c9d85115.js";const a=d("input",{shouldForwardProp:e=>e!="size"})`

    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${e=>1.15+(e.size?e.size*.3:0)}em;
    height: ${e=>1.15+(e.size?e.size*.3:0)}em;
    border: ${e=>.15+(e.size||0)*.05}em solid ${o.colors.primary};
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;


    &::before {
        content: "";
        width: ${e=>.65+(e.size||0)*.2}em;
        height: ${e=>.65+(e.size||0)*.2}em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: ${o.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${o.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${o.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;function h(e){return e.description==null?r(i,{alignment:"center",get children(){return[r(a,{type:"radio",get size(){return e.size},get disabled(){return e.disabled}}),r(n,{width:"0.5em"}),r(t,{get children(){return e.label}})]}}):r(i,{alignment:"center",get children(){return[r(a,{type:"radio",get size(){return e.size},get disabled(){return e.disabled}}),r(n,{width:"0.5em"}),r(s,{get children(){return[r(t,{get children(){return e.label}}),r(t,{color:"onBg300",get children(){return e.description}})]}})]}})}export{h as L,a as R};
