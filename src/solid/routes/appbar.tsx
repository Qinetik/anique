import {Card} from "@qinetik/anique/card";
import {AppBar} from "@qinetik/anique/appbar";
import Menu from "../icons/Menu";
import {Icon} from "@qinetik/anique/icon";
import {IconButton} from "@qinetik/anique/icon-button";
import {Row} from "@qinetik/anique/row";
import {Column} from "@qinetik/anique/column";
import {Anique} from "@qinetik/anique";

export default function AppBarPage() {
    return (
        <Column style={{width: "100%"}}>
            <h2>Basic App Bar</h2>
            <Card style={{width: "100%"}}>
                <AppBar
                    title={"Demo"}
                />
            </Card>
            <h2>App Bar With Icon</h2>
            <Card style={{width: "100%"}}>
                <AppBar
                    title={"Demo"}
                    navIcon={(
                        <Icon>
                            <Menu/>
                        </Icon>
                    )}
                />
            </Card>
            <h2>App Bar With IconButton</h2>
            <Card style={{width: "100%"}}>
                <AppBar
                    title={"Demo"}
                    navIcon={(
                        <IconButton>
                            <Menu/>
                        </IconButton>
                    )}
                />
            </Card>
            <h2>App Bar With Actions</h2>
            <Card style={{width: "100%"}}>
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
            <h2>Styled App Bar</h2>
            <Card style={{width: "100%"}}>
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
                    style={{
                        background : Anique.colors.accent100,
                        "border-bottom-left-radius" : Anique.border.lgRadius,
                        "border-bottom-right-radius" : Anique.border.lgRadius,
                    }}
                />
            </Card>
        </Column>
    )
}