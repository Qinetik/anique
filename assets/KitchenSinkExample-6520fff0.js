import{b as s,c as t,m as d,g as V,F as g,t as f,z as k}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{e as h}from"./index-7a72bcca.js";import{B as C}from"./index-ce1ffc42.js";import"./index-4460cad9.js";import{C as S}from"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import{R as q}from"./index-f5b55317.js";import{c as b}from"./create-options-168a9fab.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const w=f("<span>Quick pick:");function O(){const n=e=>({id:k(),name:e}),r=[n("apple"),n("banana"),n("pear"),n("pineapple"),n("kiwi")],p=[r[2]],[a,c]=s(r),[i,l]=s(p),u=e=>{l(e);const o=e[e.length-1];o&&!a().includes(o)&&c([...a(),o])},m=b(a,{key:"name",disable:e=>i().includes(e),filterable:!0,createable:n});return t(S,{gap:"0.5em",get children(){return[t(h,d({multiple:!0,get initialValue(){return i()},onChange:u},m)),t(q,{gap:"0.5em",get children(){return[V(w),t(g,{get each(){return a().filter(e=>!i().includes(e)).slice(0,3)},children:e=>t(C,{onClick:()=>l([...i(),e]),get children(){return e.name}})})]}})]}})}O.code=`import {createSignal, createUniqueId, For} from "solid-js";
import {createOptions, Select} from "@qinetik/anique";
import {Column} from "@qinetik/anique/column";
import {Row} from "@qinetik/anique/row";
import {Button} from "@qinetik/anique/button";

export default function KitchenSinkExample() {
    const createValue = (name) => {
        return {id: createUniqueId(), name};
    };

    const candidates = [
        createValue("apple"),
        createValue("banana"),
        createValue("pear"),
        createValue("pineapple"),
        createValue("kiwi"),
    ];

    const initialValue = [candidates[2]];

    const [options, setOptions] = createSignal(candidates);
    const [selectedValues, setSelectedValues] = createSignal(initialValue);

    const onChange = (selected) => {
        setSelectedValues(selected);

        const lastValue = selected[selected.length - 1];
        if (lastValue && !options().includes(lastValue)) {
            setOptions([...options(), lastValue]);
        }
    };

    const props = createOptions(options, {
        key: "name",
        disable: (value) => selectedValues().includes(value),
        filterable: true, // Default
        createable: createValue,
    });

    return (
        <Column gap={"0.5em"}>
            <Select
                multiple
                initialValue={selectedValues()}
                onChange={onChange}
                {...props}
            />
            <Row gap={"0.5em"}>
                <span>Quick pick:</span>
                <For
                    each={options()
                        .filter((option) => !selectedValues().includes(option))
                        .slice(0, 3)}
                >
                    {(option) => (
                        <Button
                            onClick={() => setSelectedValues([...selectedValues(), option])}
                        >
                            {option.name}
                        </Button>
                    )}
                </For>
            </Row>
        </Column>
    );
};`;export{O as default};
