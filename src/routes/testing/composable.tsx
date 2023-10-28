import {type JSX, type ParentProps} from "solid-js";
import {Row} from "@qinetik/anique";
import {createComposableComponent} from "@qinetik/anique/utils";
import {DocContainer} from "../../components/common/layout/DocContainer";

function MyComponent(props: ParentProps<{ something: JSX.Element, nice: string }>) {
    return (
        <Row>
            Something : {props.something}
            Nice : {props.nice}
            Children : {props.children}
        </Row>
    )
}

const Composable = createComposableComponent({"Something": "something", "Children": "children"}, MyComponent)

export default function ComposableTesting() {
    return (
        <DocContainer>
            <Composable.Root nice={"First"}>
                <Composable.Something>
                    Something1
                </Composable.Something>
                <Composable.Children>
                    Children1
                </Composable.Children>
            </Composable.Root>
            <Composable.Root nice={"Second"}>
                <Composable.Something>
                    Something2
                </Composable.Something>
                <Composable.Children>
                    Children2
                </Composable.Children>
            </Composable.Root>
        </DocContainer>
    )
}