import {Component, createSignal} from "solid-js";
import {AlertType, Anique, Card, createSnackbars, Position, Row, SnackbarHost} from "@qinetik/anique";
import {Column} from "@qinetik/anique/column";
import {Expandable} from "@qinetik/anique/accordion";
import {DisplayCode} from "../../components/common/code/DisplayCode";
import {IconButton} from "@qinetik/anique/icon-button";
import {copyTextToClipboard} from "../utils/clipboard";
import {CopyIcon} from "../icons/CopyIcon";
import {CodeIcon} from "../icons/CodeIcon";
import {TextureIcon} from "../icons/TextureIcon";

export function ComponentExample(props: { component: Component, codeVisible ?: boolean }) {

    const code = (props.component as any).code

    const snackbars = createSnackbars()
    const [viewCode, setViewCode] = createSignal(props.codeVisible || false)
    const [hasBackground, setHasBackground] = createSignal(true)

    return (
        <Column gap={"0.5em"}>
            <SnackbarHost
                isVisible={() => true}
                snackbars={snackbars.snackbars()}
                position={() => Position.BottomRight}
            />
            <Card
                style={{background: hasBackground() ? Anique.colors.bg200 : "transparent"}}
            >
                <Expandable
                    class={viewCode() ? "expanded" : undefined}
                    exposed={<props.component/>}
                >
                    <div style={{"margin-top": "0.5em"}}><DisplayCode value={code || "error loading code"}/></div>
                </Expandable>
            </Card>
            <Row style={{"align-self": "flex-end"}} gap={"0.5em"}>
                <IconButton
                    onClick={() => setHasBackground((e) => !e)}
                >
                    <TextureIcon/>
                </IconButton>
                <IconButton
                    onClick={() => {
                        copyTextToClipboard(code).then(e => {
                            if (e) {
                                snackbars.showAlert("Code has been copied", AlertType.Success)
                            } else {
                                snackbars.showAlert("Code couldn't be copied", AlertType.Error)
                            }
                        })
                    }}
                >
                    <CopyIcon/>
                </IconButton>
                <IconButton
                    onClick={() => setViewCode((e) => !e)}
                    style={viewCode() ? {
                        background: Anique.colors.bg100
                    } : undefined}
                >
                    <CodeIcon/>
                </IconButton>
            </Row>
        </Column>
    )
}