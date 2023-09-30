import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {Card} from "@qinetik/anique/card";
import {Select} from "@qinetik/anique/select";

export default function SelectPage(){
    return (
        <Column>
            <Headline>Select</Headline>
            <Card>
                <Select>
                    <option>My option 1</option>
                    <option>My option 2</option>
                    <option>My option 3</option>
                    <option>My option 4</option>
                </Select>
            </Card>
            <h1>Disabled</h1>
            <Card>
                <Select disabled={true}>
                    <option>My option 1</option>
                    <option>My option 2</option>
                    <option>My option 3</option>
                    <option>My option 4</option>
                </Select>
            </Card>
            <h1>Multiple</h1>
            <Card>
                <Select multiple={true}>
                    <option>My option 1</option>
                    <option>My option 2</option>
                    <option>My option 3</option>
                    <option>My option 4</option>
                </Select>
            </Card>
        </Column>
    )
}