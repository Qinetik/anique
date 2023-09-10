import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";

export default function ButtonPage() {
    return (
        <PageContainer>

            <H1>Button</H1>
            <Card>
                <Button>Home</Button>
            </Card>

        </PageContainer>
    )
}