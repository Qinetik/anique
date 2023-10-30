import {BaseTextField, TextArea} from "@qinetik/anique/textfield";
import {Column} from "@qinetik/anique/column";

export default function DisabledFieldAreaExample() {
    return (
        <Column gap={"0.5em"}>
            <BaseTextField
                placeholder={"Username"}
                value={"Something i wrote here"}
                disabled
            />
            <TextArea
                placeholder={"Note here"}
                disabled
            >Something I wrote here</TextArea>
        </Column>
    )
}