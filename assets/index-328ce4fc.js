import{s as e}from"./index-6df8a466.js";import{A as o}from"./Theme-c9d85115.js";const n=e("select")`
    border: none;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    padding: 0.2em 0.8em 0.2em 0.2em;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
        display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
    
    &:disabled {
        cursor: not-allowed;
        background-color: ${o.colors.onBg400};
        background-image: linear-gradient(to top, ${o.colors.onBg300}, ${o.colors.onBg400} 33%);
        color : ${o.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${o.colors.bg100};
    }
    
`,i=e(n)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${o.border.smRadius};
`;export{i as N};
