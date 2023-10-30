import {createOptions, Select} from "@qinetik/anique";

export default function FilterableExample() {
    const props = createOptions(["apple", "banana", "pear", "pineapple", "kiwi"]);
    return <Select {...props} />;
};