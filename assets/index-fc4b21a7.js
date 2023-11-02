import{s as a}from"./index-e694302e.js";const e=a("div",{shouldForwardProp:l=>l!="gap"&&l!="wrap"&&l!="alignment"})`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${l=>l.alignment!=null?"align-items:"+l.alignment+";":""}
    ${l=>l.gap!=null?"gap:"+l.gap+";":null}
    ${l=>l.wrap?"flex-wrap : wrap;":null}
`;export{e as R};
