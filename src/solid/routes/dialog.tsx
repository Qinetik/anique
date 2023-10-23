import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {createSignal, For, Show} from "solid-js";
import {AlertDialog, Dialog} from "@qinetik/anique/dialog";
import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique/theme";
import {Column, Icon, IconButton, Row} from "@qinetik/anique";
import {Position, relativePositionStyle} from "@qinetik/anique/utils";
import {PositionSelector} from "../components/PositionSelection.tsx";
import {AlertIcon} from "@qinetik/anique-icons";

const DialogContent = styled("div")`
    border-radius: 1em;
    background: ${Anique.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position: absolute;
`

export default function DialogPage() {

    const [is1stOpen, setIs1stOpen] = createSignal(false)
    const [is2ndOpen, setIs2ndOpen] = createSignal(false)
    const [alertOpen, setAlertOpen] = createSignal(false)
    const [alertIconOpen, setAlertIconOpen] = createSignal(false)
    const [alertNoTitle, setAlertNoTitle] = createSignal(false)
    const [alertOnlyContent, setAlertOnlyContent] = createSignal(false)
    const [activePosition, setActivePosition] = createSignal(Position.TopLeft);

    return (
        <Column>
            <h1>Dialog</h1>
            <h1>Centered Dialog</h1>
            <Card>
                <Button onClick={(e) => setIs1stOpen(!is1stOpen())}>Open Dialog</Button>
            </Card>
            {is1stOpen() ? (
                <Dialog
                    onCloseRequest={() => setIs1stOpen(false)}
                >
                    <DialogContent>
                        This is a centered dialog
                    </DialogContent>
                </Dialog>
            ) : null}
            <h1>Positioned Dialog</h1>
            <Column gap={"0.5em"}>
                <PositionSelector
                    activePosition={activePosition}
                    setActivePosition={setActivePosition}
                />
                <Card>
                    <Button onClick={(e) => setIs2ndOpen(!is2ndOpen())}>Open Dialog</Button>
                </Card>
            </Column>
            <h1>Alert Dialog</h1>
            <Column gap={"0.5em"}>
                <Card>
                    <Row gap={"1em"}>
                        <Button onClick={(e) => setAlertOpen((e) => !e)}>Simple</Button>
                        <Button onClick={(e) => setAlertIconOpen((e) => !e)}>With Title Icon</Button>
                        <Button onClick={(e) => setAlertNoTitle((e) => !e)}>No Title & Close</Button>
                        <Button onClick={(e) => setAlertOnlyContent((e) => !e)}>Only Content</Button>
                    </Row>
                </Card>
            </Column>
            <AlertDialog
                onCloseRequest={() => setAlertOpen(false)}
                isVisible={alertOpen}
                title={"Location Services"}
                content={"Would you like to allow location service ?"}
                actions={
                    <Button>Allow</Button>
                }
            />
            <AlertDialog
                onCloseRequest={() => setAlertNoTitle(false)}
                isVisible={alertNoTitle}
                closeIcon={false}
                content={"Would you like to allow location service ?"}
                actions={
                    <Button>Allow</Button>
                }
            />
            <AlertDialog
                onCloseRequest={() => setAlertOnlyContent(false)}
                isVisible={alertOnlyContent}
                closeIcon={false}
                content={"Would you like to allow location service ?"}
            />
            <AlertDialog
                onCloseRequest={() => setAlertIconOpen(false)}
                isVisible={alertIconOpen}
                title={
                    <>
                        <Icon>
                            <AlertIcon/>
                        </Icon>
                        <h4 style={{margin: 0}}>Location Services</h4>
                    </>
                }
                content={"Would you like to allow location service ?"}
                actions={
                    <>
                        <Button>Allow</Button>
                    </>
                }
            />
            <Dialog
                onCloseRequest={() => setIs2ndOpen(false)}
                isVisible={is2ndOpen}
                relative
            >
                <DialogContent
                    style={{
                        ...relativePositionStyle(activePosition(), activePosition() != Position.Center ? "1em" : "0", activePosition() != Position.Center ? "1em" : "0")
                    }}
                >
                    This is a positioned dialog
                </DialogContent>
            </Dialog>
        </Column>
    )
}