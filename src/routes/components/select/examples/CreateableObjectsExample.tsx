import {createOptions, Select} from "@qinetik/anique";

export default function CreateableObjectsExample() {
    const props = createOptions(
        [
            {name: "apple"},
            {name: "banana"},
            {name: "pear"},
            {name: "pineapple"},
            {name: "kiwi"},
        ],
        {
            key: "name",
            createable: true,
        }
    );
    return <Select {...props} />;
};