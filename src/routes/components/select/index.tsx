import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import FormatExample from "./examples/FormatExample";
import ResetExample from "./examples/ResetExample";
import AsyncFetchExample from "./examples/AsyncFetchExample";
import FilterableExample from "./examples/FilterableExample";
import FilterableObjectsExample from "./examples/FilterableObjectsExample";
import CreateableExample from "./examples/CreateableExample";
import CreateableObjectsExample from "./examples/CreateableObjectsExample";
import MultipleExample from "./examples/MultipleExample";
import MultipleFilterableExample from "./examples/MultipleFilterableExample";
import MultipleCreateableExample from "./examples/MultipleCreateableExample";
import DisabledOptionsExample from "./examples/DisabledOptionsExample";
import AutoScrollExample from "./examples/AutoScrollExample";
import ReactiveExample from "./examples/ReactiveExample";
import KitchenSinkExample from "./examples/KitchenSinkExample";
import GroupingExample from "./examples/GroupingExample";
import StaticSelectExample from "./examples/StaticExample";
import DisabledSelectExample from "./examples/DisabledSelectExample";
import {ComponentExample} from "../../../solid/components/ComponentExample";

export default function SelectPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Select</Headline>
                <h1>Examples</h1>
                <h2>Static</h2>
                <ComponentExample component={StaticSelectExample} hasBackground={false}/>
                <h2>Disabled</h2>
                <ComponentExample component={DisabledSelectExample} hasBackground={false}/>
                <h2>Reactive</h2>
                <ComponentExample component={ReactiveExample} hasBackground={false}/>
                <h2>Format</h2>
                <ComponentExample component={FormatExample} hasBackground={false}/>
                <h2>Reset</h2>
                <ComponentExample component={ResetExample} hasBackground={false}/>
                <h2>Async</h2>
                <ComponentExample component={AsyncFetchExample} hasBackground={false}/>
                <h2>Filterable</h2>
                <ComponentExample component={FilterableExample} hasBackground={false}/>
                <h2>Filterable (Objects)</h2>
                <ComponentExample component={FilterableObjectsExample} hasBackground={false}/>
                <h2>Creatable</h2>
                <ComponentExample component={CreateableExample} hasBackground={false}/>
                <h2>Creatable (Objects)</h2>
                <ComponentExample component={CreateableObjectsExample} hasBackground={false}/>
                <h2>Multiple</h2>
                <ComponentExample component={MultipleExample} hasBackground={false}/>
                <h2>Multiple Filterable</h2>
                <ComponentExample component={MultipleFilterableExample} hasBackground={false}/>
                <h2>Multiple Creatable</h2>
                <ComponentExample component={MultipleCreateableExample} hasBackground={false}/>
                <h2>Disabled Options</h2>
                <ComponentExample component={DisabledOptionsExample} hasBackground={false}/>
                {/*<h2>Grouping</h2>*/}
                {/*<ComponentExample component={GroupingExample} hasBackground={false}/>*/}
                <h2>Auto Scroll</h2>
                <ComponentExample component={AutoScrollExample} hasBackground={false}/>
                <h2>Kitchen Sink</h2>
                <ComponentExample component={KitchenSinkExample} hasBackground={false}/>
            </Column>
        </DocContainer>
    )
}