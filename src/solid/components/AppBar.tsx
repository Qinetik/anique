import {IconButton} from "@qinetik/anique/icon-button";
import MenuIcon from "../icons/Menu";
import {Row} from "@qinetik/anique/row";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {AppBar} from "@qinetik/anique/appbar";

export function WebAppBar(props : { title ?: string }) {
    return (
        <AppBar
            navIcon={
                <IconButton onClick={() => {
                    // TODO
                }}>
                    <MenuIcon/>
                </IconButton>
            }
            title={props.title || "Anique"}
            actions={(
                <Row>
                    <ThemeSwitcher />
                </Row>
            )}
        />
    )
}