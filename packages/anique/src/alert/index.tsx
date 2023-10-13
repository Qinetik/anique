import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {Row} from "../row";
import {Icon} from "../icon";
import { CheckCircleOutline } from "@qinetik/anique-icons";
import { AlertIcon } from "@qinetik/anique-icons";
import { InformationBoxOutline } from "@qinetik/anique-icons";
import {JSX, ParentProps, splitProps} from "solid-js";

export enum AlertType {
    Info = "info",
    Warning = "warning",
    Error = "error",
    Success = "success"
}

export interface AlertProps {
    type?: AlertType
}

function color(type ?: AlertType): string {
    // @ts-ignore if given type is garbage, this will fail
    return Anique.colors["on" + (type || "s")[0].toUpperCase() + ((type || "success").substring(1))]
}

export const AlertRoot = styled("div")<AlertProps>`
    padding: 1em;
    background: ${p => Anique.colors[(p.type || "success")]};
    border-radius: ${Anique.border.mdRadius};
    color: ${p => color(p.type)};

    & * {
        color: ${p => color(p.type)};
        fill: ${p => color(p.type)};
    }
`

function icon(type ?: AlertType) {
    switch (type) {
        case AlertType.Info:
            return InformationBoxOutline
        case AlertType.Warning:
            return AlertIcon
        case AlertType.Error:
            return AlertIcon
    }
    return CheckCircleOutline
}

export function Alert(props: ParentProps<AlertProps> & JSX.HTMLAttributes<HTMLDivElement>) {
    const AlertIcon = icon(props.type)
    return (
        <AlertRoot type={props.type} {...splitProps(props, ["type", "children"])[1]}>
            <Row gap={"1em"}>
                <Icon>
                    <AlertIcon />
                </Icon>
                {props.children}
            </Row>
        </AlertRoot>
    )
}