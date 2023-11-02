import{c,g as l,i as g,t as d}from"./entry-client-efb8f723.js";import"./index-e694302e.js";import"./Theme-c9d85115.js";import"./index-149a8a7e.js";import"./index-299bfccf.js";import"./index-b09005ba.js";import{h as f}from"./index-14c4e9b6.js";import"./index-01de8884.js";import"./index-d49a5ec8.js";import"./index-5b708f90.js";import"./index-1bac3de3.js";import"./index-0af3ff77.js";import"./index-74c14fc3.js";import"./index-2f6b9236.js";import"./index-ceddf797.js";import"./index-fc4b21a7.js";import{c as O}from"./create-options-3b227efb.js";import"./index-38fd54ad.js";import"./index-18364d7e.js";import"./index-058de43f.js";import"./index-b793009e.js";import"./UL-596ed081.js";import"./index-a48d6eab.js";import"./index-0c52bc5d.js";import"./index-fb659094.js";import"./css-7a3f4315.js";import"./keyframes-17273c02.js";const b=d('<span class="text-sm uppercase">'),h=p=>{const u=p.reduce((o,s)=>(o.push(...s.options.map(a=>({...a,group:s.name}))),o),[]),r=O(u,{key:"name"}),m=r.options;return r.options=o=>{const a=m(o).reduce((n,t)=>{const e=t.value.group;return n.has(e)||n.set(e,[]),n.get(e).push(t),n},new Map),i=[];for(const[n,t]of a.entries())i.push({label:(()=>{const e=l(b);return g(e,n),e})(),value:n,disabled:!0}),i.push(...t);return i},r};function v(){const p=h([{name:"Fruits",options:[{name:"apple"},{name:"banana"},{name:"kiwi"},{name:"pear"},{name:"pineapple"}]},{name:"Vegetables",options:[{name:"lettuce"},{name:"cabbage"},{name:"carrot"},{name:"potatoe"}]}]);return c(f,p)}v.code=`import {createOptions, Select} from "@qinetik/anique";

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
