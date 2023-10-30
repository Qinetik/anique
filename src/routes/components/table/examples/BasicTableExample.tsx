import {Table} from "@qinetik/anique/table";

export default function BasicTableExample() {
    return (
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
    )
}