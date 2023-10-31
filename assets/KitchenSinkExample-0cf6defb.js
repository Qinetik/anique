import{b as s,c as t,m as d,g as V,F as g,t as f,z as h}from"./entry-client-2ac2a0bd.js";import"./index-6df8a466.js";import"./Theme-c9d85115.js";import"./index-049cff28.js";import"./index-9f77492a.js";import"./index-5cdee6ed.js";import{h as k}from"./index-1f767762.js";import{B as C}from"./index-2e914305.js";import{C as S}from"./index-756d1732.js";import"./index-11ae770f.js";import"./index-7069a893.js";import"./index-046c679b.js";import"./index-b9c452d6.js";import"./index-328ce4fc.js";import"./index-5b9b80c5.js";import{R as q}from"./index-a7d06282.js";import{c as b}from"./create-options-92c33580.js";import"./index-7eaad697.js";import"./index-ca0b38ae.js";import"./index-0f5f71d8.js";import"./index-18f0bfa9.js";import"./UL-ae71d882.js";import"./index-2a59ccac.js";import"./index-180ab7c4.js";import"./index-cf8204f2.js";import"./css-39caad62.js";import"./keyframes-dbb20f19.js";const w=f("<span>Quick pick:");function O(){const n=e=>({id:h(),name:e}),l=[n("apple"),n("banana"),n("pear"),n("pineapple"),n("kiwi")],c=[l[2]],[a,p]=s(l),[i,r]=s(c),u=e=>{r(e);const o=e[e.length-1];o&&!a().includes(o)&&p([...a(),o])},m=b(a,{key:"name",disable:e=>i().includes(e),filterable:!0,createable:n});return t(S,{gap:"0.5em",get children(){return[t(k,d({multiple:!0,get initialValue(){return i()},onChange:u},m)),t(q,{gap:"0.5em",get children(){return[V(w),t(g,{get each(){return a().filter(e=>!i().includes(e)).slice(0,3)},children:e=>t(C,{onClick:()=>r([...i(),e]),get children(){return e.name}})})]}})]}})}O.code=`import {createSignal, createUniqueId, For} from "solid-js";
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
