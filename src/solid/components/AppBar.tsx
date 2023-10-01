import {IconButton} from "@qinetik/anique/icon-button";
import MenuIcon from "../icons/Menu";
import {Row} from "@qinetik/anique/row";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {AppBar} from "@qinetik/anique/appbar";
import {GithubIconBlack, GithubIconWhite} from "../icons/GithubIcons.tsx";

export function WebAppBar(props: { title?: string }) {
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
                <Row gap={"1em"}>
                    <IconButton as={"a"} target={"_blank"} href={"https://github.com/qinetik/anique"} class={"display-in-dark"}>
                        <GithubIconWhite/>
                    </IconButton>
                    <IconButton as={"a"} target={"_blank"} href={"https://github.com/qinetik/anique"} class={"display-in-light"}>
                        <GithubIconBlack/>
                    </IconButton>
                    <ThemeSwitcher/>
                </Row>
            )}
        />
    )
}