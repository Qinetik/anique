import {Column, Headline} from "@qinetik/anique";

export default function ScaffoldPage(props : { baseUrl : string }) {
    return (
        <Column>
            <Headline>Scaffold</Headline>
            <p>Checkout <a href={`${props.baseUrl}/components/testing/scaffold`} target={"_blank"}>Scaffold Page</a></p>
        </Column>
    )
}