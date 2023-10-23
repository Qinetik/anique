import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {JSX, mergeProps, splitProps} from "solid-js";
import {Row} from "../row";
import {Column} from "../column";

const Input = styled("input")`

    width: 14em;
    min-height: 2em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.5em;
    box-sizing: border-box;
    border: 2px solid ${Anique.colors.bg200};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${Anique.colors.bg100};

    &:focus {
        border-color: ${Anique.colors.primary};
        box-shadow: 0 0 0 2px ${Anique.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background: ${Anique.colors.bg300};
        color: ${Anique.colors.bg500};
    }

`

export const BaseTextField = Input

const TextFieldContainer = styled(Column)`

    width: 14em;
    border: 2px solid ${Anique.colors.bg100};
    box-sizing: border-box;
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    background: ${Anique.colors.bg100};

    padding: 0.25em 0.5em;
    position: relative;

    &:has(input:focus) {
        border-color: ${Anique.colors.primary};
        box-shadow: 0 0 0 1px ${Anique.colors.primary100};
        outline: 3px solid transparent;
    }

    &.disabled {
        background: ${Anique.colors.bg500};
    }

    &.disabled .label {
        color: ${Anique.colors.onBg500};
    }

`

const UnstyledTextField = styled("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-family: ${Anique.font.secondary};
    min-width: 10em;
    flex: 1;
    box-sizing: border-box;
`

const TextFieldLabel = styled("span")`
    color: ${Anique.colors.onBg200};
    font-size: 0.8rem;
    margin-left: 0.25em;
`

export interface TextFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
    leadingIcon?: any
    trailingIcon?: any
    label?: string
    containerProps?: JSX.HTMLAttributes<HTMLDivElement>
}

export function TextField(props: TextFieldProps) {
    return (
        <TextFieldContainer
            {...(props.containerProps || {})}
            class={props.disabled ? (props.class ? "disabled " + props.class : "disabled") : props.class}
        >
            {props.label && <TextFieldLabel class={"label"}>{props.label}</TextFieldLabel>}
            <Row style={{width: "100%", "align-items": "center"}}>
                {props.leadingIcon}
                <UnstyledTextField {...splitProps(props, ["leadingIcon", "trailingIcon", "label"])[1]}/>
                {props.trailingIcon}
            </Row>
        </TextFieldContainer>
    )
}

export const TextArea = styled(Input.withComponent("textarea"))`
    resize: vertical;
    height: 8rem;
`