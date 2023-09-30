import {Row} from "../row";
import {Spacer} from "../utils";
import {Text} from "../text";
import {Column} from "../column";
import {styled} from "@qinetik/emotion";
import {Size} from "../theme/Size";
import {Anique} from "../theme/Theme";

export interface RadioProps {
    size?: Size
}

export const Radio = styled("input")<RadioProps>`

    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${p => 1.15 + (p.size ? p.size * 0.3 : 0)}em;
    height: ${p => 1.15 + (p.size ? p.size * 0.3 : 0)}em;
    border: ${p => 0.15 + ((p.size || 0) * 0.05)}em solid ${Anique.colors.primary};
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;


    &::before {
        content: "";
        width: ${p => 0.65 + (p.size || 0) * 0.2}em;
        height: ${p => 0.65 + (p.size || 0) * 0.2}em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: ${Anique.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${Anique.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${Anique.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`

export interface LabeledRadioProps extends RadioProps {
    label: string
    description?: string
    isChecked?: () => boolean
    onChange?: (change: boolean) => void;
    disabled?: boolean
    size ?: Size
}

export function LabeledRadio(props: LabeledRadioProps) {
    return (
        props.description == null ? (
            <Row alignment={"center"}>
                <Radio type={"radio"} size={props.size} disabled={props.disabled}/>
                <Spacer width={"0.5em"}/>
                <Text>{props.label}</Text>
            </Row>
        ) : (
            <Row alignment={"center"}>
                <Radio type={"radio"} size={props.size} disabled={props.disabled}/>
                <Spacer width={"0.5em"}/>
                <Column>
                    <Text>{props.label}</Text>
                    <Text color={"onBg300"}>{props.description}</Text>
                </Column>
            </Row>
        )
    )
}