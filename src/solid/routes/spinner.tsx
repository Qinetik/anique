import {Card} from "@qinetik/anique/card";
import {Spinner, SpinnerAnimation} from "@qinetik/anique/spinner";
import {Column} from "@qinetik/anique/column";

export default function SpinnerPage() {
    return (
        <Column>
            <SpinnerAnimation/>
            <h2>Spinner</h2>
            <Card>
                <Spinner/>
            </Card>
            <h2>Primary Colored Spinner</h2>
            <Card>
                <Spinner color={"primary"}/>
            </Card>
            <h2>Accent Colored Spinner</h2>
            <Card>
                <Spinner color={"accent"}/>
            </Card>
            <h2>Error Colored Spinner</h2>
            <Card>
                <Spinner color={"error"}/>
            </Card>
        </Column>
    )
}