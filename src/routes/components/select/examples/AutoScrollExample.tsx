import {Select} from "@qinetik/anique";

export default function AutoScrollExample() {
    return <Select options={[...Array(50).keys()]}/>
}