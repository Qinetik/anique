import {createOptions, Select} from "@qinetik/anique";

export default function MultipleFilterableExample() {
    const props = createOptions(["apple", "banana", "pear", "pineapple", "kiwi"]);
    return <Select multiple {...props} />;
};