import {DocContainer} from "../../../components/common/layout/DocContainer";
import {Column, Headline} from "@qinetik/anique";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicIconExample from "./examples/BasicIconExample";
import IconFillSizeExample from "./examples/IconFillSizeExample";

export default function IconPage() {
    return (
        <DocContainer>
            <Column gap={"0.5em"}>

                <Headline>Icon</Headline>

                Icon is a simple component to display a svg icon, The svg icon is the child passed to Icon component

                <p>
                    Icon is used to enforce size constraints, However nothing changes size passed in svg attributes
                <br />
                    You can also use it to enforce fill of the svg
                <br />
                    By default All icons in <code>@qinetik/mdi</code> have exact size
                </p>

                <ComponentExample component={BasicIconExample}/>

                At the moment, You can pass size and fill to affect svg within

                <ComponentExample component={IconFillSizeExample}/>

            </Column>
        </DocContainer>
    )
}