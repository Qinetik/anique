import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {createSignal} from "solid-js";
import {Dialog} from "@qinetik/anique/dialog";
import {Centered} from "@qinetik/anique/utils/centered";

export default function DialogPage() {
    const [isOpen, setIsOpen] = createSignal(false)
    return (
        <>
            <h1>Dialog</h1>
            <Card>
                <Button onClick={(e) => setIsOpen(!isOpen())}>Open Dialog</Button>
            </Card>
            {isOpen() ? (
                <Dialog
                    onCloseRequest={() => setIsOpen(false)}>
                    <Centered>
                        Hello Darkness My Old Friend
                    </Centered>
                </Dialog>
            ) : null}
        </>
    )
}