import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Column} from "@qinetik/anique/column";

export default function ButtonPage() {
    return (
        <PageContainer>

            <Column>
                <H1>Button</H1>
                <Card>
                    <Button>Home</Button>
                </Card>
            </Column>

        </PageContainer>
    )
}