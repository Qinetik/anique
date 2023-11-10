import {Button} from "@qinetik/anique/button";
import {Dialog} from "@qinetik/anique/dialog";
import {createSignal} from "solid-js";
import {Anique} from "@qinetik/anique";
import {css} from "@qinetik/emotion";

const dialogContent = (padding ?: string) => css`
    border-radius: 1em;
    background: ${Anique.colors.bg400};
    box-sizing: border-box;
    padding: ${padding || "2em"};
    position: absolute;
    display: flex;
    gap: 1em;
`

export default function NestedDialogExample() {

    const [is1stOpen, setIs1stOpen] = createSignal(false)
    const [is2ndOpen, setIs2ndOpen] = createSignal(false)
    const [is3rdOpen, setIs3rdOpen] = createSignal(false)

    return (
        <div>
            <Button onClick={(e) => {
                setIs1stOpen(v => !v)
            }}>Open Dialog</Button>

            <Dialog
                onCloseRequest={() => setIs1stOpen(false)}
                isVisible={is1stOpen}
            >
                <div class={dialogContent()()}>
                    <Button onClick={() => setIs2ndOpen(true)}>Open Nested outside</Button>
                    <Button onClick={() => setIs3rdOpen(true)}>Open Nested within</Button>
                </div>

                {/* Nested dialog that is inside the parent dialog */}
                <Dialog
                    onCloseRequest={() => setIs3rdOpen(false)}
                    isVisible={is3rdOpen}
                >
                    <div class={dialogContent("8em")()}>
                        <span>Close this one by clicking outside this dialog</span>
                    </div>
                </Dialog>

            </Dialog>

            {/* Nested dialog that is outside the parent dialog */}
            <Dialog
                onCloseRequest={() => setIs2ndOpen(false)}
                isVisible={is2ndOpen}
            >
                <div class={dialogContent("8em")()}>
                    <span>Close this one by clicking outside this dialog</span>
                </div>
            </Dialog>

        </div>
    )
}