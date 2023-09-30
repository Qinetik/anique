import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Card} from "@qinetik/anique/card";
import {NativeSelect} from "@qinetik/anique/native-select";

export default function NativeSelectPage(){
    return (
        <Column>
            <Headline>Native Select</Headline>
            <Card>
                <NativeSelect>
                    <option>My option 1</option>
                    <option>My option 2</option>
                    <option>My option 3</option>
                    <option>My option 4</option>
                </NativeSelect>
            </Card>
            <h1>Disabled</h1>
            <Card>
                <NativeSelect disabled={true}>
                    <option>My option 1</option>
                    <option>My option 2</option>
                    <option>My option 3</option>
                    <option>My option 4</option>
                </NativeSelect>
            </Card>
            <h1>Multiple</h1>
            <Card>
                <NativeSelect multiple={true}>
                    <option>My option 1</option>
                    <option>My option 2</option>
                    <option>My option 3</option>
                    <option>My option 4</option>
                </NativeSelect>
            </Card>
        </Column>
    )
}