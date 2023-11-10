import{s as t}from"./index-1349e2ee.js";import{A as o}from"./Theme-c9d85115.js";import{R as a}from"./index-57c7de99.js";import{S as s}from"./UnstyledLink-d0c164d4.js";import{c as r,m as c}from"./entry-client-f8a4ae77.js";import{T as n}from"./index-85412099.js";import{C as m}from"./index-459eedf5.js";const g=t("div")`
    border-radius: ${o.border.mdRadius};
    background: ${o.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`,$=t(g)`

    cursor: pointer;
    transition: background 0.2s ease-in;
    position: relative;

    &:hover {
        background: ${o.colors.bg300};
    }
    
    &:active {
        background: ${o.colors.bg400};
    }

`,d=t("input",{shouldForwardProp:e=>e!="size"})`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: ${e=>1.15+(e.size?e.size*.3:0)}em;
  height: ${e=>1.15+(e.size?e.size*.3:0)}em;
  border: ${e=>.15+(e.size||0)*.05}em solid ${o.colors.primary};
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: ${e=>.65+(e.size||0)*.2}em;
    height: ${e=>.65+(e.size||0)*.2}em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 80ms transform ease-in-out;
    box-shadow: inset 1em 1em ${o.colors.onBg300};
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(0.5px, 0.05em) solid ${o.colors.onBg500};
    outline-offset: 0.1em;
  }

  &:disabled {
    border: 0.15em solid ${o.colors.bg500};
    color: ${o.colors.bg200};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

`;function p(e){const i={checked:e.isChecked?e.isChecked():void 0,onChange:e.onChange?l=>e.onChange(l.currentTarget.checked):void 0};return e.description==null?r(a,{alignment:"center",get children(){return[r(d,c({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},i)),r(s,{width:"0.5em"}),r(n,{get children(){return e.label}})]}}):r(a,{alignment:"center",get children(){return[r(d,c({type:"checkbox",get size(){return e.size},get disabled(){return e.disabled}},i)),r(s,{width:"0.5em"}),r(m,{get children(){return[r(n,{get children(){return e.label}}),r(n,{color:"onBg300",get children(){return e.description}})]}})]}})}export{$ as C,p as L,g as a,d as b};
