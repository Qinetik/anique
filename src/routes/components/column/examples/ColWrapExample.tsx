import {Column} from "@qinetik/anique/column";
import {Button} from "@qinetik/anique/button";

export default function ColWrapExample() {
    return (
        <Column style={{height: "160px"}} gap={"0.5em 0.75em"} wrap>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
            <Button>Fourth</Button>
            <Button>Fifth</Button>
        </Column>
    )
}