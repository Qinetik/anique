import {Column} from "@qinetik/anique/column";
import {Anique} from "@qinetik/anique/theme/Theme";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import SpinnerSizeExamples from "./examples/SpinnerSizeExamples";
import SpinnerColorExamples from "./examples/SpinnerColorExamples";

export default function SpinnerPage() {
    return (
        <DocContainer>
            <Column>
                <h1>Spinner</h1>
                <h2>Size Variations</h2>
                <ComponentExample component={SpinnerSizeExamples}/>
                <h2>Color Variations</h2>
                <p style={{
                    color: Anique.colors.onBg300
                }}>
                    These variations are normal, primary, accent and error colored
                </p>
                <ComponentExample component={SpinnerColorExamples}/>
            </Column>
        </DocContainer>
    )
}