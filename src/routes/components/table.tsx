import {Column, Headline} from "@qinetik/anique";
import {Table} from "@qinetik/anique/table";
import {DocContainer} from "../../components/common/layout/DocContainer";

export default function TablePage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Table</Headline>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Dom</td>
                        <td>6000</td>
                    </tr>
                    <tr class="active">
                        <td>Melissa</td>
                        <td>5150</td>
                    </tr>
                    </tbody>
                </Table>
            </Column>
        </DocContainer>
    )
}