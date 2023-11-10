import {DocContainer} from "../../../components/common/layout/DocContainer";
import {Column, Headline} from "@qinetik/anique";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicPaginationExample from "./examples/BasicPaginationExample";
import ComposablePaginationExample from "./examples/ComposablePaginationExample";

export default function PaginationPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Pagination</Headline>
                <ComponentExample component={BasicPaginationExample}/>
                <p>Here's how to compose it yourself</p>
                <ComponentExample component={ComposablePaginationExample}/>
            </Column>
        </DocContainer>
    )
}