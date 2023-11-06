import{b as s,c as t,m as d,g as V,F as g,t as f,A as k}from"./entry-client-b1cdb755.js";import"./index-123f5b0d.js";import"./Theme-c9d85115.js";import"./index-8e5bd437.js";import"./index-b3b79d55.js";import"./index-9819aab5.js";import{e as h}from"./index-8f15c368.js";import{B as C}from"./index-69b2c138.js";import"./index-072e3436.js";import{C as S}from"./index-6bcccf20.js";import"./index-b9566db1.js";import"./index-023d75c5.js";import"./index-2758a2ec.js";import"./index-70c7726a.js";import"./index-11fb7b74.js";import"./index-f7f81b39.js";import{R as q}from"./index-fe3b8c3b.js";import{c as b}from"./create-options-9c7a1a11.js";import"./index-2c8603ad.js";import"./index-15598541.js";import"./index-0be5e0ec.js";import"./index-a1f40fe4.js";import"./UnstyledLink-f3bad3fa.js";import"./index-f148c6eb.js";import"./index-96651276.js";import"./index-01a819b4.js";import"./css-b493a813.js";import"./keyframes-e9a77a12.js";const w=f("<span>Quick pick:");function O(){const n=e=>({id:k(),name:e}),r=[n("apple"),n("banana"),n("pear"),n("pineapple"),n("kiwi")],p=[r[2]],[a,c]=s(r),[i,l]=s(p),u=e=>{l(e);const o=e[e.length-1];o&&!a().includes(o)&&c([...a(),o])},m=b(a,{key:"name",disable:e=>i().includes(e),filterable:!0,createable:n});return t(S,{gap:"0.5em",get children(){return[t(h,d({multiple:!0,get initialValue(){return i()},onChange:u},m)),t(q,{gap:"0.5em",get children(){return[V(w),t(g,{get each(){return a().filter(e=>!i().includes(e)).slice(0,3)},children:e=>t(C,{onClick:()=>l([...i(),e]),get children(){return e.name}})})]}})]}})}O.code=`import {createSignal, createUniqueId, For} from "solid-js";
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
