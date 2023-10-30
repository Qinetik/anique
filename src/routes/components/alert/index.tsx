import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import AlertExamples from "./examples/AlertExamples";

export default function AlertPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Alert</Headline>
                <ComponentExample component={AlertExamples}/>
                {/*<h1>Alert Root w/o Icon</h1>*/}
                {/*<Column gap={"2em"}>*/}
                {/*    <AlertRoot type={AlertType.Info}>*/}
                {/*        This is an info alert - check it out!*/}
                {/*    </AlertRoot>*/}
                {/*    <AlertRoot type={AlertType.Warning}>*/}
                {/*        This is a warning alert - check it out!*/}
                {/*    </AlertRoot>*/}
                {/*    <AlertRoot type={AlertType.Error}>*/}
                {/*        This is an error alert - check it out!*/}
                {/*    </AlertRoot>*/}
                {/*    <AlertRoot type={AlertType.Success}>*/}
                {/*        This is a success alert - check it out!*/}
                {/*    </AlertRoot>*/}
                {/*</Column>*/}
            </Column>
        </DocContainer>
    )
}