import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Card} from "@qinetik/anique/card";
import {Slider} from "@qinetik/anique/slider";

export function SliderPage() {
    return (
        <Column>
            <Headline>Slider</Headline>
            <Card style={{ display:"flex" }}>
                <Slider type={"range"}/>
            </Card>
        </Column>
    )
}