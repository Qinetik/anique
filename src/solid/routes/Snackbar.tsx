import {AlertType, BaseTextField, Button, Column, Headline} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {Position} from "@qinetik/anique/utils";
import {PositionSelector} from "../components/PositionSelection";
import {Portal} from "solid-js/web";
import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";

export default function SnackbarPage() {

    const snackbars = createSnackbars()
    const [activePosition, setActivePosition] = createSignal(Position.TopLeft)
    const [creationText, setCreationText] = createSignal("This is a snackbar text")

    return (
        <Column>
            <Headline>Snackbar</Headline>
            <Column gap={"0.75em"}>
                <PositionSelector
                    activePosition={activePosition}
                    setActivePosition={setActivePosition}
                />
                <BaseTextField
                    style={{width: "20em"}}
                    value={creationText()}
                    onChange={(e) => {
                        setCreationText(e.currentTarget.value)
                    }}
                />
                <Button
                    onClick={() => {
                        const text = creationText()
                        snackbars.showAlert(text, AlertType.Info, 3000)
                    }}
                >Create Snackbar</Button>
            </Column>
            <Portal>
                <SnackbarHost
                    isVisible={() => true}
                    snackbars={snackbars.snackbars()}
                    position={activePosition}
                />
            </Portal>
        </Column>
    )
}