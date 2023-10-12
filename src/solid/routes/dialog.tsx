import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {createSignal, For} from "solid-js";
import {Dialog} from "@qinetik/anique/dialog";
import {styled} from "@qinetik/emotion";
import {Anique} from "@qinetik/anique/theme";
import {Column} from "@qinetik/anique";
import {Position, relativePositionStyle} from "@qinetik/anique/utils";
import {PositionSelector} from "../components/PositionSelection.tsx";

const DialogContent = styled("div")`
    border-radius: 1em;
    background: ${Anique.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position : absolute;
`

export default function DialogPage() {

    const [is1stOpen, setIs1stOpen] = createSignal(false)
    const [is2ndOpen, setIs2ndOpen] = createSignal(false)
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
            {is2ndOpen() ? (
                <Dialog
                    onCloseRequest={() => setIs2ndOpen(false)}
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
            ) : null}
        </Column>
    )
}