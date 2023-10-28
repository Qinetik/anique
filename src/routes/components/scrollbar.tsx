import {DocContainer} from "../../components/common/layout/DocContainer";
import {Column, Headline, ScrollbarArea} from "@qinetik/anique";
import {createGlobalStyle} from "@qinetik/emotion";

const ScrollbarStyles = createGlobalStyle`
    .area {
        height : 300px;
        overflow-y : auto;
    }
    .item {
        width : 80px;
        height : 20px;
        padding : 0.5em;
    }
`

export default function ScrollbarPage() {
    let items : number[] = []
    for(let i = 0; i< 25; i++) {
        items = [...items, i]
    }
    return (
        <DocContainer>
            <ScrollbarStyles />
            <Column>
                <Headline>Scrollbar</Headline>
                <p>You can use ScrollbarArea to create a beautiful looking scrollbar</p>
                <ScrollbarArea class="area">
                    {items.map((e) => (
                        <div class="item">{e}</div>
                    ))}
                </ScrollbarArea>
            </Column>
        </DocContainer>
    )
}