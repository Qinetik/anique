import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-tsx";
import {createMemo} from "solid-js";
import "./style.scss"
import {Card} from "@qinetik/anique";

export function DisplayCode(props: { value: string, language?: string, isDark?: boolean }) {
    const themeClassName = () =>
        (props.isDark == null || props.isDark)
            ? "prism-dark-theme prism-theme"
            : "prism-light-theme prism-theme";

    const code = createMemo(() =>
        Prism.highlight(
            props.value,
            Prism.languages[(props.language || "tsx")],
            (props.language || "tsx")
        )
    );

    return (
        <div class={themeClassName()}>
            <Card
                innerHTML={code()}
            />
        </div>
    )

}