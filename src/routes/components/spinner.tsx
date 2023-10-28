import {Card} from "@qinetik/anique/card";
import {Spinner, SpinnerAnimation} from "@qinetik/anique/spinner";
import {Column} from "@qinetik/anique/column";
import {Row} from "@qinetik/anique/row";
import {Anique} from "@qinetik/anique/theme/Theme";
import {Size} from "@qinetik/anique/theme/Size";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function SpinnerPage() {
    return (
        <DocContainer>
            <Column>
                <h1>Spinner</h1>
                <h2>Size Variations</h2>
                <Card>
                    <Row gap={"2em"}>
                        <Spinner size={Size.Small}/>
                        <Spinner size={Size.Medium} />
                        <Spinner size={Size.Large} />
                        <Spinner size={3} />
                        <Spinner size={4} />
                    </Row>
                </Card>
                <h2>Color Variations</h2>
                <p style={{
                    color : Anique.colors.onBg300
                }}>
                    These variations are normal, primary, accent and error colored
                </p>
                <Card>
                    <Row gap={"2em"}>
                        <Spinner/>
                        <Spinner color={"primary"}/>
                        <Spinner color={"accent"}/>
                        <Spinner color={"error"}/>
                    </Row>
                </Card>
            </Column>
        </DocContainer>
    )
}