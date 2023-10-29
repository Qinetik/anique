import {css} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {AlertIcon, CheckCircleOutline, InformationBoxOutline} from "@qinetik/anique-icons";
import {JSX, ParentProps, splitProps} from "solid-js";
import {Icon} from "../icon";

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

export const AlertCss = (p: AlertProps & { color: string }) => css`
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em;
  background: ${Anique.colors[(p.type || "success")]};
  border-radius: ${Anique.border.mdRadius};
  color: ${p.color};

  & * {
    color: ${p.color};
    fill: ${p.color};
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
    const ItsIcon = icon(props.type)
    const Injection = AlertCss({color: color(props.type), type: props.type})
    return (
        <div class={Injection() + (props.class ? (" " + props.class) : "")} {...splitProps(props, ["children"])[1]}>
            <Icon>
                <ItsIcon/>
            </Icon>
            {props.children}
        </div>
    )
}