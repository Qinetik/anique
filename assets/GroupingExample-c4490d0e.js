import{c,g as l,i as g,t as d}from"./entry-client-a96cbc4d.js";import"./index-755bc77f.js";import"./Theme-c9d85115.js";import"./index-9b146908.js";import"./index-0f3f083d.js";import"./index-41256d2f.js";import{h as f}from"./index-b3c017de.js";import"./index-fe490c73.js";import"./index-df837084.js";import"./index-0b90490a.js";import"./index-1fc8dcd4.js";import"./index-2ede3e13.js";import"./index-1573e59b.js";import"./index-6baed7d3.js";import"./index-69f01235.js";import"./index-b49aba21.js";import{c as O}from"./create-options-c86d64f2.js";import"./index-d2d6e189.js";import"./index-8ce3d155.js";import"./index-ffe50960.js";import"./index-2f2b9ad8.js";import"./UL-412bb8d8.js";import"./index-0e33e01a.js";import"./index-3bdeeb8b.js";import"./index-e3dc129e.js";import"./css-884efc55.js";import"./keyframes-bd3d6767.js";const b=d('<span class="text-sm uppercase">'),h=p=>{const u=p.reduce((o,s)=>(o.push(...s.options.map(a=>({...a,group:s.name}))),o),[]),r=O(u,{key:"name"}),m=r.options;return r.options=o=>{const a=m(o).reduce((n,t)=>{const e=t.value.group;return n.has(e)||n.set(e,[]),n.get(e).push(t),n},new Map),i=[];for(const[n,t]of a.entries())i.push({label:(()=>{const e=l(b);return g(e,n),e})(),value:n,disabled:!0}),i.push(...t);return i},r};function v(){const p=h([{name:"Fruits",options:[{name:"apple"},{name:"banana"},{name:"kiwi"},{name:"pear"},{name:"pineapple"}]},{name:"Vegetables",options:[{name:"lettuce"},{name:"cabbage"},{name:"carrot"},{name:"potatoe"}]}]);return c(f,p)}v.code=`import {createOptions, Select} from "@qinetik/anique";

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
