import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Row} from "@qinetik/anique/row";

export default function RowPage() {
    return (
        <>
            <H1>Row</H1>
            <Card>
                <Row gap={"1em"}>
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                    <Button>Fourth</Button>
                    <Button>Fifth</Button>
                </Row>
            </Card>
        </>
    )
}