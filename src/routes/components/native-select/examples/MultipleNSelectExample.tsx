import {NativeSelect} from "@qinetik/anique/native-select";

export default function MultipleNSelectExample() {
    return (
        <NativeSelect multiple={true}>
            <option>My option 1</option>
            <option>My option 2</option>
            <option>My option 3</option>
            <option>My option 4</option>
        </NativeSelect>
    )
}