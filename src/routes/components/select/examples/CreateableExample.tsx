import {createOptions, Select} from "@qinetik/anique";

export default function CreateableExample() {
    const props = createOptions(
        ["apple", "banana", "pear", "pineapple", "kiwi"],
        {createable: true}
    );
    return <Select {...props} />;
};