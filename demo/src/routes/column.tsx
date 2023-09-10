import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Column} from "@qinetik/anique/column";
import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";

export default function ColumnPage() {
    return (
        <PageContainer>
            <H1>Column</H1>
            <Card>
                <Column gap={"1em"}>
                    <Button>First</Button>
                    <Button>Second</Button>
                    <Button>Third</Button>
                    <Button>Fourth</Button>
                    <Button>Fifth</Button>
                </Column>
            </Card>
        </PageContainer>
    )
}