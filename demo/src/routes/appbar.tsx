import {PageContainer} from "../components/PageContainer";
import {H2} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {AppBar} from "@qinetik/anique/appbar";
import Menu from "../icons/Menu";
import {Icon} from "@qinetik/anique/icon";
import {IconButton} from "@qinetik/anique/icon-button";
import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";

export default function AppBarPage() {
    return (
        <PageContainer style={{
            width: "100%",
            margin: "0",
            "box-sizing": "border-box",
            padding: "0 6em"
        }}>
            <Column style={{width : "100%"}}>
                <H2>Basic App Bar</H2>
                <Card style={{width : "100%"}}>
                    <AppBar
                        title={"Demo"}
                    />
                </Card>
                <H2>App Bar With Icon</H2>
                <Card style={{width : "100%"}}>
                    <AppBar
                        title={"Demo"}
                        navIcon={(
                            <Icon>
                                <Menu/>
                            </Icon>
                        )}
                    />
                </Card>
                <H2>App Bar With IconButton</H2>
                <Card style={{width : "100%"}}>
                    <AppBar
                        title={"Demo"}
                        navIcon={(
                            <IconButton>
                                <Menu/>
                            </IconButton>
                        )}
                    />
                </Card>
                <H2>App Bar With Actions</H2>
                <Card style={{width : "100%"}}>
                    <AppBar
                        title={"Demo"}
                        navIcon={(
                            <IconButton>
                                <Menu/>
                            </IconButton>
                        )}
                        actions={(
                            <Row>
                                <IconButton>
                                    <Menu/>
                                </IconButton>
                                <IconButton>
                                    <Menu/>
                                </IconButton>
                                <IconButton>
                                    <Menu/>
                                </IconButton>
                            </Row>
                        )}
                    />
                </Card>
            </Column>
        </PageContainer>
    )
}