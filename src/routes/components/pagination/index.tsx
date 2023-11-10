import {DocContainer} from "../../../components/common/layout/DocContainer";
import {Column, Headline} from "@qinetik/anique";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicPaginationExample from "./examples/BasicPaginationExample";

export default function PaginationPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Pagination</Headline>
                <ComponentExample component={BasicPaginationExample} />
            </Column>
        </DocContainer>
    )
}