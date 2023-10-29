import {Column} from "@qinetik/anique/column";
import {Alert, AlertType} from "@qinetik/anique/alert";
import {Headline} from "@qinetik/anique/headline";
import {Row} from "@qinetik/anique/row";
import {Icon} from "@qinetik/anique/icon";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function AlertPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Alert</Headline>
                <Column gap={"2em"}>
                    <Alert type={AlertType.Info}>
                        This is an info alert - check it out!
                    </Alert>
                    <Alert type={AlertType.Warning}>
                        This is a warning alert - check it out!
                    </Alert>
                    <Alert type={AlertType.Error}>
                        This is an error alert - check it out!
                    </Alert>
                    <Alert type={AlertType.Success}>
                        This is a success alert - check it out!
                    </Alert>
                    <Alert type={AlertType.Success}>
                        This is the default success alert - check it out!
                    </Alert>
                </Column>
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