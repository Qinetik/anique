import {createOptions, Select} from "@qinetik/anique";

export default function MultipleCreateableExample() {
    const props = createOptions(
        ["apple", "banana", "pear", "pineapple", "kiwi"],
        {
            createable: true,
        }
    );
    return <Select multiple {...props} />;
};