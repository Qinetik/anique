import {Row} from "../row";
import {Spacer} from "../spacer/Spacer";
import {Text} from "../text";
import {Column} from "../column";

export interface RadioProps {
    isChecked?: () => boolean
    onChange?: (change: boolean) => void;
}

export function Radio(props: RadioProps) {
    return (
        <input
            type={"radio"}
            style={{width: "1em", height: "1em"}}
            checked={props.isChecked != null ? props.isChecked() : undefined}
            onChange={(e) => {
                if (props.onChange != null) {
                    props.onChange(e.currentTarget.checked)
                }
            }}
        />
    )
}

export interface LabeledRadioProps extends RadioProps {
    label?: string
    description?: string
}

export function LabeledRadio(props: LabeledRadioProps) {
    return (
        props.label == null && props.description == null ? (<Radio {...props}/>) : (
            props.description == null ? (
                <Row alignment={"center"}>
                    <Radio {...props}/>
                    <Spacer width={"0.5em"}/>
                    <Text>{props.label}</Text>
                </Row>
            ) : (
                <Row alignment={"center"}>
                    <Radio {...props}/>
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