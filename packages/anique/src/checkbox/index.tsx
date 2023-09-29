import {Row} from "../row";
import {Spacer} from "../spacer/Spacer";
import {Text} from "../text";
import {Column} from "../column";
import {Size} from "../theme/Size";
import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

export interface CheckboxProps {
    size?: Size
}

export const Checkbox = styled("input")<CheckboxProps>`
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${p => 1.15 + (p.size ? p.size * 0.3 : 0)}em;
    height: ${p => 1.15 + (p.size ? p.size * 0.3 : 0)}em;
    border: ${p => 0.15 + ((p.size || 0) * 0.05)}em solid ${Anique.colors.primary};
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: ${p => 0.65 + (p.size || 0) * 0.2}em;
        height: ${p => 0.65 + (p.size || 0) * 0.2}em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 80ms transform ease-in-out;
        box-shadow: inset 1em 1em ${Anique.colors.onBg300};
        /* Windows High Contrast Mode */
        background-color: CanvasText;
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.05em) solid ${Anique.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border: 0.15em solid ${Anique.colors.bg500};
        color: ${Anique.colors.bg200};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`

export interface LabeledCheckboxProps extends CheckboxProps {
    label: string
    description?: string
    isChecked?: () => boolean
    onChange?: (change: boolean) => void;
    disabled?: boolean
}

export function LabeledCheckbox(props: LabeledCheckboxProps) {
    return (
        props.description == null ? (
            <Row alignment={"center"}>
                <Checkbox type={"checkbox"} size={props.size} disabled={props.disabled}/>
                <Spacer width={"0.5em"}/>
                <Text>{props.label}</Text>
            </Row>
        ) : (
            <Row alignment={"center"}>
                <Checkbox type={"checkbox"} size={props.size} disabled={props.disabled}/>
                <Spacer width={"0.5em"}/>
                <Column>
                    <Text>{props.label}</Text>
                    <Text color={"onBg300"}>{props.description}</Text>
                </Column>
            </Row>
        )
    )
}