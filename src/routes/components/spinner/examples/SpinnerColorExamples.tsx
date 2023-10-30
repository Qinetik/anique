import {Spinner} from "@qinetik/anique/spinner";
import {Row} from "@qinetik/anique/row";

export default function SpinnerColorExamples() {
    return (
        <Row gap={"2em"}>
            <Spinner/>
            <Spinner color={"primary"}/>
            <Spinner color={"accent"}/>
            <Spinner color={"error"}/>
        </Row>
    )
}