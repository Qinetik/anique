import {PageContainer} from "../components/PageContainer";
import {H1, H2, H3, H4, H5, H6} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {Column} from "@qinetik/anique/column";

export default function Headings() {
    return (
        <PageContainer>
            <Column>
                <H1>Heaings</H1>
                <H2>H1</H2>
                <Card>
                    <H1>This is my H1 Heading</H1>
                </Card>
                <H2>H2</H2>
                <Card>
                    <H2>This is my H2 Heading</H2>
                </Card>
                <H3>H3</H3>
                <Card>
                    <H3>This is my H3 Heading</H3>
                </Card>
                <H4>H4</H4>
                <Card>
                    <H4>This is my H4 Heading</H4>
                </Card>
                <H5>H5</H5>
                <Card>
                    <H5>This is my H5 Heading</H5>
                </Card>
                <H6>H6</H6>
                <Card>
                    <H6>This is my H6 Heading</H6>
                </Card>
            </Column>
        </PageContainer>
    )
}