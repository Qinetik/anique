import {AlertType, BaseTextField, Button, Column, Headline} from "@qinetik/anique";
import {createSignal} from "solid-js";
import {Position} from "@qinetik/anique/utils";
import {Portal} from "solid-js/web";
import {createSnackbars, SnackbarHost} from "@qinetik/anique/snackbar";
import SnackbarExample from "./examples/SnackbarExample";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import {PositionSelector} from "../../../solid/components/PositionSelection";
import {ComponentExample} from "../../../solid/components/ComponentExample";

export default function SnackbarPage() {

    const snackbars = createSnackbars()
    const [activePosition, setActivePosition] = createSignal(Position.TopLeft)
    const [creationText, setCreationText] = createSignal("This is a snackbar text")

    return (
        <DocContainer>
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
                    <ComponentExample component={SnackbarExample} codeVisible={true} />
                </Column>
                <Portal>
                    <SnackbarHost
                        isVisible={() => true}
                        snackbars={snackbars.snackbars()}
                        position={activePosition}
                    />
                </Portal>
            </Column>
        </DocContainer>
    )
}