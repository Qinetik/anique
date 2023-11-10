import{c,g as l,i as g,t as d}from"./entry-client-c6070623.js";import"./index-108c4257.js";import"./Theme-c9d85115.js";import"./index-923cd83d.js";import"./index-ebb683f1.js";import"./index-222b9f4a.js";import{e as f}from"./index-22b1ace7.js";import"./index-66667bdf.js";import"./index-eeee74a7.js";import"./index-c98928aa.js";import"./index-6082ff86.js";import"./index-8335c2a4.js";import"./index-b1181c6a.js";import"./index-6856f9e6.js";import"./index-abcb63f9.js";import"./index-1b661b3f.js";import"./index-0ebd6ae5.js";import{c as O}from"./create-options-c814fb9e.js";import"./index-f5fca8e5.js";import"./index-0b681d21.js";import"./index-2a05b8f3.js";import"./index-aae78141.js";import"./UnstyledLink-0663e860.js";import"./index-01205ea4.js";import"./index-05974638.js";import"./index-6a98188b.js";import"./index-12602de8.js";import"./css-c6273b18.js";import"./keyframes-2d272afe.js";const b=d('<span class="text-sm uppercase">'),h=p=>{const u=p.reduce((o,s)=>(o.push(...s.options.map(a=>({...a,group:s.name}))),o),[]),r=O(u,{key:"name"}),m=r.options;return r.options=o=>{const a=m(o).reduce((n,t)=>{const e=t.value.group;return n.has(e)||n.set(e,[]),n.get(e).push(t),n},new Map),i=[];for(const[n,t]of a.entries())i.push({label:(()=>{const e=l(b);return g(e,n),e})(),value:n,disabled:!0}),i.push(...t);return i},r};function v(){const p=h([{name:"Fruits",options:[{name:"apple"},{name:"banana"},{name:"kiwi"},{name:"pear"},{name:"pineapple"}]},{name:"Vegetables",options:[{name:"lettuce"},{name:"cabbage"},{name:"carrot"},{name:"potatoe"}]}]);return c(f,p)}v.code=`import {createOptions, Select} from "@qinetik/anique";

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
