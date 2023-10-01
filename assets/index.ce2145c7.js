import{a as e,A as o}from"./Theme.e785dc72.js";const t=e("input")`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${r=>6+(r.size||0)*3}px;
    background: ${o.colors.primary};
    border: none;
    outline: none;
    margin-top: ${r=>6+(r.size||0)*.01}px;
    margin-bottom: ${r=>6+(r.size||0)*.01}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${r=>16+(r.size||0)*3}px;
        height: ${r=>16+(r.size||0)*3}px;
        background: ${o.colors.onBg};
        border-radius: 50%;
        border : ${r=>4+(r.size||0)}px solid ${o.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${o.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${o.colors.onBg400};
        border-color : ${o.colors.primary};
    }
    
`;export{t as S};