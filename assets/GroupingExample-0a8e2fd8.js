import{c,g as l,i as g,t as d}from"./entry-client-e7f04580.js";import"./index-326c8233.js";import"./Theme-c9d85115.js";import"./index-505673d9.js";import"./index-99f4859e.js";import"./index-c9b3d057.js";import{e as f}from"./index-7a72bcca.js";import"./index-ce1ffc42.js";import"./index-4460cad9.js";import"./index-7c3e3388.js";import"./index-26e5468d.js";import"./index-5dd4f3c1.js";import"./index-713cd9c3.js";import"./index-5e9d9ab7.js";import"./index-6e455505.js";import"./index-4b92b0d7.js";import"./index-f5b55317.js";import{c as O}from"./create-options-168a9fab.js";import"./index-395e79e9.js";import"./index-8515abcf.js";import"./index-1a03f1e0.js";import"./index-38ea9e49.js";import"./UnstyledLink-3a662916.js";import"./index-6e8c2b16.js";import"./index-744ba056.js";import"./index-eb07a99c.js";import"./css-9de456a1.js";import"./keyframes-f88073d5.js";const b=d('<span class="text-sm uppercase">'),h=p=>{const u=p.reduce((o,s)=>(o.push(...s.options.map(a=>({...a,group:s.name}))),o),[]),r=O(u,{key:"name"}),m=r.options;return r.options=o=>{const a=m(o).reduce((n,t)=>{const e=t.value.group;return n.has(e)||n.set(e,[]),n.get(e).push(t),n},new Map),i=[];for(const[n,t]of a.entries())i.push({label:(()=>{const e=l(b);return g(e,n),e})(),value:n,disabled:!0}),i.push(...t);return i},r};function v(){const p=h([{name:"Fruits",options:[{name:"apple"},{name:"banana"},{name:"kiwi"},{name:"pear"},{name:"pineapple"}]},{name:"Vegetables",options:[{name:"lettuce"},{name:"cabbage"},{name:"carrot"},{name:"potatoe"}]}]);return c(f,p)}v.code=`import {createOptions, Select} from "@qinetik/anique";

interface Group {
    name: string;
    options: { name: string }[];
}

const createGroupedOptions = (groups: Group[]) => {
    const values = groups.reduce((values, group) => {
        values.push(
            ...group.options.map((item) => ({...item, group: group.name}))
        );
        return values;
    }, []);

    const props = createOptions(values, {key: "name"});
    const originalOptions = props.options;

    props.options = (inputValue) => {
        const options = originalOptions(inputValue);

        const grouped = options.reduce((result, item) => {
            const group = item.value.group;
            if (!result.has(group)) result.set(group, []);
            result.get(group).push(item);
            return result;
        }, new Map());

        const groupedOptions = [];
        for (const [groupName, options] of grouped.entries()) {
            groupedOptions.push({
                label: <span class="text-sm uppercase">{groupName}</span>,
                value: groupName,
                disabled: true,
            });
            groupedOptions.push(...options);
        }

        return groupedOptions;
    };

    return props;
};

export default function GroupingExample() {
    const props = createGroupedOptions([
        {
            name: "Fruits",
            options: [
                {name: "apple"},
                {name: "banana"},
                {name: "kiwi"},
                {name: "pear"},
                {name: "pineapple"},
            ],
        },
        {
            name: "Vegetables",
            options: [
                {name: "lettuce"},
                {name: "cabbage"},
                {name: "carrot"},
                {name: "potatoe"},
            ],
        },
    ]);

    return <Select {...props} />;
};`;export{v as default};
