import{b as s,c as t,m as d,g as V,F as g,t as f,z as h}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{h as k}from"./index-b3c017de.js";import{B as C}from"./index-fe490c73.js";import{C as S}from"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import{R as q}from"./index-b49aba21.js";import{c as b}from"./create-options-c86d64f2.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const w=f("<span>Quick pick:");function O(){const n=e=>({id:h(),name:e}),l=[n("apple"),n("banana"),n("pear"),n("pineapple"),n("kiwi")],c=[l[2]],[a,p]=s(l),[i,r]=s(c),u=e=>{r(e);const o=e[e.length-1];o&&!a().includes(o)&&p([...a(),o])},m=b(a,{key:"name",disable:e=>i().includes(e),filterable:!0,createable:n});return t(S,{gap:"0.5em",get children(){return[t(k,d({multiple:!0,get initialValue(){return i()},onChange:u},m)),t(q,{gap:"0.5em",get children(){return[V(w),t(g,{get each(){return a().filter(e=>!i().includes(e)).slice(0,3)},children:e=>t(C,{onClick:()=>r([...i(),e]),get children(){return e.name}})})]}})]}})}O.code=`import {createSignal, createUniqueId, For} from "solid-js";
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
