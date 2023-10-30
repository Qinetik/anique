import {Select} from "@qinetik/anique";

export default function DisabledSelectExample() {
    return (
        <Select
            disabled={true}
            options={["apple", "banana", "pear", "pineapple", "kiwi"]}
        />
    )
}