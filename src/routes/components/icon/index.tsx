import {Icon} from "@qinetik/anique/icon";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {Accordion, Anique, Card, Column, Headline, Row} from "@qinetik/anique";
import Menu from "../../../solid/icons/Menu";

export default function IconPage() {
    return (
        <DocContainer>
            <Column gap={"0.5em"}>
                <Headline>Icon</Headline>

                Icon is a simple component to display a svg icon, The svg icon is the child passed to Icon component

                <Card>
                    <Icon>
                        <Menu/>
                    </Icon>
                </Card>
                <br/>
                <Accordion title={"Code"} defaultExpanded={true}>
                    <div>
                        {`<Icon>
                        <Menu/>
                    </Icon>`}
                    </div>
                </Accordion>

                At the moment, You can pass size and fill

                <Card>
                    <Row>
                        <Icon
                            fill={Anique.colors.success}
                            size={2}
                        >
                            <Menu/>
                        </Icon>
                        <Icon
                            fill={Anique.colors.error}
                            size={2}
                        >
                            <Menu/>
                        </Icon>
                    </Row>
                </Card>
                <br/>
                <Accordion title={"Code"} defaultExpanded={false}>
                    ```typescript jsx
                    <Row>
                        <Icon
                            fill={Anique.colors.success}
                            size={2}
                        >
                            <Menu/>
                        </Icon>
                        <Icon
                            fill={Anique.colors.error}
                            size={2}
                        >
                            <Menu/>
                        </Icon>
                    </Row>
                    ```
                </Accordion>
            </Column>
        </DocContainer>
    )
}