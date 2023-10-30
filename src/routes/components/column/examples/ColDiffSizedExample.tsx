import {Column} from "@qinetik/anique/column";
import {Button} from "@qinetik/anique/button";

export default function ColDiffSizedExample(){
    return (
        <Column gap={"1em"}>
            <Button size={0}>First</Button>
            <Button size={1}>Second</Button>
            <Button size={2}>Third</Button>
            <Button size={3}>Fourth</Button>
            <Button size={4}>Fifth</Button>
        </Column>
    )
}