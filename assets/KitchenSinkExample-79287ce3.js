import{b as s,c as t,m as d,g as V,F as g,t as f,z as h}from"./entry-client-3af6d313.js";import"./index-94caafb4.js";import"./Theme-c9d85115.js";import"./index-bab6a310.js";import"./index-c5bef6b0.js";import"./index-cfa94871.js";import{h as k}from"./index-1830aefe.js";import{B as C}from"./index-6d8184a4.js";import{C as S}from"./index-f6f07d1f.js";import"./index-c4ee8099.js";import"./index-9d7cf436.js";import"./index-67eb7d25.js";import"./index-98966c2c.js";import"./index-5ba1b5d6.js";import"./index-51d3af24.js";import{R as q}from"./index-f7946e34.js";import{c as b}from"./create-options-e3883024.js";import"./index-68b47e9b.js";import"./index-7ed7999b.js";import"./index-7355db2b.js";import"./index-e32cadde.js";import"./UL-e6a4a899.js";import"./index-760a4f67.js";import"./index-24296090.js";import"./index-1bde3f1a.js";import"./css-e90cefea.js";import"./keyframes-6d33a2dc.js";const w=f("<span>Quick pick:");function O(){const n=e=>({id:h(),name:e}),l=[n("apple"),n("banana"),n("pear"),n("pineapple"),n("kiwi")],c=[l[2]],[a,p]=s(l),[i,r]=s(c),u=e=>{r(e);const o=e[e.length-1];o&&!a().includes(o)&&p([...a(),o])},m=b(a,{key:"name",disable:e=>i().includes(e),filterable:!0,createable:n});return t(S,{gap:"0.5em",get children(){return[t(k,d({multiple:!0,get initialValue(){return i()},onChange:u},m)),t(q,{gap:"0.5em",get children(){return[V(w),t(g,{get each(){return a().filter(e=>!i().includes(e)).slice(0,3)},children:e=>t(C,{onClick:()=>r([...i(),e]),get children(){return e.name}})})]}})]}})}O.code=`import {createSignal, createUniqueId, For} from "solid-js";
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
