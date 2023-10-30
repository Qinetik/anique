import {Select} from "@qinetik/anique";

export default function DisabledOptionsExample() {
    return <Select
        options={["apple", "banana", "pear", "pineapple", "kiwi"]}
        isOptionDisabled={(option) => option === "pear"}
    />
}