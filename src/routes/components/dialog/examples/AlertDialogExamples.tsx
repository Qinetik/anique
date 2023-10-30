import {Button} from "@qinetik/anique/button";
import {AlertDialog} from "@qinetik/anique/dialog";
import {createSignal} from "solid-js";
import {Icon, Row} from "@qinetik/anique";
import {AlertIcon} from "@qinetik/anique-icons";

export default function AlertDialogExamples() {
    
    const [alertOpen, setAlertOpen] = createSignal(false)
    const [alertIconOpen, setAlertIconOpen] = createSignal(false)
    const [alertNoTitle, setAlertNoTitle] = createSignal(false)
    const [alertOnlyContent, setAlertOnlyContent] = createSignal(false)

    return (
        <>
            <Row gap={"1em"}>
                <Button onClick={(e) => setAlertOpen((e) => !e)}>Simple</Button>
                <Button onClick={(e) => setAlertIconOpen((e) => !e)}>With Title Icon</Button>
                <Button onClick={(e) => setAlertNoTitle((e) => !e)}>No Title & Close</Button>
                <Button onClick={(e) => setAlertOnlyContent((e) => !e)}>Only Content</Button>
            </Row>
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
        </>
    )
}