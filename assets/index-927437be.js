import{c as i,g as r,j as n,r as a,t as s}from"./entry-client-2fda6d46.js";import{s as l}from"./index-bb5a5d3d.js";import{A as t}from"./Theme-c9d85115.js";const d=s("<input type=checkbox>"),c=s('<span class="slider round">'),p=l("label")`

    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;


    /* Hide default HTML checkbox */

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */

    & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${t.colors.bg300};
        -webkit-transition: .4s;
        transition: .4s;
    }

    & .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: ${t.colors.onBg};
        -webkit-transition: .4s;
        transition: .4s;
    }

    &[data-disabled] .slider:before {
        background-color: ${t.colors.onBg400};
    }

    & input:checked + .slider {
        background-color: ${t.colors.primary};
    }

    & input:focus + .slider {
        box-shadow: 0 0 1px ${t.colors.primary};
    }

    & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */

    & .slider.round {
        border-radius: 34px;
    }

    & .slider.round:before {
        border-radius: 50%;
    }
`;function m(o){return i(p,{class:"switch",get"data-disabled"(){return o.disabled},get children(){return[(()=>{const e=r(d);return n(e,o,!1,!1),a(),e})(),r(c)]}})}export{m as T};
