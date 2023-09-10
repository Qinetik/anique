import {Row} from "../row";
import {Spacer} from "../spacer/Spacer";
import {Text} from "../text";
import {Column} from "../column";
import {Size} from "../theme/Size";

export interface CheckboxProps {
    isChecked?: () => boolean
    onChange?: (change: boolean) => void;
    size ?: Size
}

export function Checkbox(props: CheckboxProps) {
    return (
        <input
            type={"checkbox"}
            style={{width: (props.size || 0) * 0.5 + 1 + "em", height: (props.size || 0) * 0.5 + 1 + "em"}}
            checked={props.isChecked != null ? props.isChecked() : undefined}
            onChange={(e) => {
                if (props.onChange != null) {
                    props.onChange(e.currentTarget.checked)
                }
            }}
        />
    )
}

export interface LabeledCheckboxProps extends CheckboxProps {
    label?: string
    description?: string
}

export function LabeledCheckbox(props: LabeledCheckboxProps) {
    return (
        props.label == null && props.description == null ? (<Checkbox {...props}/>) : (
            props.description == null ? (
                <Row alignment={"center"}>
                    <Checkbox {...props}/>
                    <Spacer width={"0.5em"}/>
                    <Text>{props.label}</Text>
                </Row>
            ) : (
                <Row alignment={"center"}>
                    <Checkbox {...props}/>
                    <Spacer width={"0.5em"}/>
                    <Column>
                        <Text>{props.label}</Text>
                        <Text color={"onBg300"}>{props.description}</Text>
                    </Column>
                </Row>
            )
        )
    )
}