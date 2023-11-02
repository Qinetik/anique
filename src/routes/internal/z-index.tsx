import {DocContainer} from "../../components/common/layout/DocContainer";
import {Column, Headline, Table} from "@qinetik/anique";
import {AniqueZIndex} from "@qinetik/anique/utils/zIndexMap";

export default function zIndexRoute() {
    return (
        <DocContainer>
            <Column>
                <Headline>Z-Index for different components</Headline>
                <Table>
                    <thead>
                    <tr>
                        <td>Type</td>
                        <td>Index</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(AniqueZIndex).map((type) => (
                        <tr>
                            <td>{type}</td>
                            <td>{
                                // @ts-ignore
                                AniqueZIndex[type].toString()
                            }</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Column>
        </DocContainer>
    )
}