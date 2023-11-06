import{c,g as l,i as g,t as d}from"./entry-client-23914c21.js";import"./index-6427a2f6.js";import"./Theme-c9d85115.js";import"./index-096f9d8e.js";import"./index-d1661098.js";import"./index-55909f5f.js";import{e as f}from"./index-58ae8ba7.js";import"./index-99dc85aa.js";import"./index-70649c9c.js";import"./index-0715b131.js";import"./index-05916829.js";import"./index-c124aee2.js";import"./index-1740d0a2.js";import"./index-1cfc4eeb.js";import"./index-9fac0c6a.js";import"./index-7e2460ae.js";import"./index-4d1252b9.js";import{c as O}from"./create-options-0b4f26e6.js";import"./index-a2a937ad.js";import"./index-4b012459.js";import"./index-e59065e4.js";import"./index-c19d27c0.js";import"./UnstyledLink-395be662.js";import"./index-54c0212b.js";import"./index-3fa64ce4.js";import"./index-075dc7a0.js";import"./css-26601209.js";import"./keyframes-59a403a9.js";const b=d('<span class="text-sm uppercase">'),h=p=>{const u=p.reduce((o,s)=>(o.push(...s.options.map(a=>({...a,group:s.name}))),o),[]),r=O(u,{key:"name"}),m=r.options;return r.options=o=>{const a=m(o).reduce((n,t)=>{const e=t.value.group;return n.has(e)||n.set(e,[]),n.get(e).push(t),n},new Map),i=[];for(const[n,t]of a.entries())i.push({label:(()=>{const e=l(b);return g(e,n),e})(),value:n,disabled:!0}),i.push(...t);return i},r};function v(){const p=h([{name:"Fruits",options:[{name:"apple"},{name:"banana"},{name:"kiwi"},{name:"pear"},{name:"pineapple"}]},{name:"Vegetables",options:[{name:"lettuce"},{name:"cabbage"},{name:"carrot"},{name:"potatoe"}]}]);return c(f,p)}v.code=`import {createOptions, Select} from "@qinetik/anique";

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
