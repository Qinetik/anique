import {Card, Column, Headline} from "@qinetik/anique";
import Highlight from "../highlight";

export default function ThemingPage() {
    return (
        <Column>
            <Headline>Theming</Headline>
            <p>
                Anique has at the moment two themes, To use any theme you must import its CSS into your page. <br/>
                Preferably the head element
            </p>
            <Card>
                <Highlight language={"js"} autoDetect={true}>
                    {`
                    var x = 5;
                    var y = 6;
                    var z = 17;
                    
                    `}
                </Highlight>
            </Card>
        </Column>
    )
}