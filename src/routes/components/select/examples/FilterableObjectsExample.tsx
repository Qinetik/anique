import {createOptions, Select} from "@qinetik/anique";

export default function FilterableObjectsExample() {
    const props = createOptions(
        [
            {name: "apple"},
            {name: "banana"},
            {name: "pear"},
            {name: "pineapple"},
            {name: "kiwi"},
        ],
        {key: "name"}
    );
    return <Select {...props} />;
};