import {PageContainer} from "../components/PageContainer";
import {H2} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Spinner} from "@qinetik/anique/spinner";
import {Column} from "@qinetik/anique/column";

export default function SpinnerPage() {
    return (
        <PageContainer>
            <Column>
                <H2>Spinner</H2>
                <Card>
                    <Spinner/>
                </Card>
                <H2>Primary Colored Spinner</H2>
                <Card>
                    <Spinner color={"primary"}/>
                </Card>
                <H2>Accent Colored Spinner</H2>
                <Card>
                    <Spinner color={"accent"}/>
                </Card>
                <H2>Error Colored Spinner</H2>
                <Card>
                    <Spinner color={"error"}/>
                </Card>
            </Column>
        </PageContainer>
    )
}