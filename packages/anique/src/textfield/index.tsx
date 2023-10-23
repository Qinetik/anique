import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";
import {JSX, splitProps} from "solid-js";
import {Row} from "../row";
import {Column} from "../column";

const Input = styled("input")`

    width: 14em;
    min-height : 2em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.5em;
    box-sizing : border-box;
    border: 2px solid ${Anique.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:focus {
        border-color: ${Anique.colors.primary};
        box-shadow: 0 0 0 2px ${Anique.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background-color: #eee;
        cursor: not-allowed;
    }
`

export const BaseTextField = Input

const TextFieldContainer = styled(Column)`

    border: 2px solid ${Anique.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:has(input:focus) {
        border-color: ${Anique.colors.primary};
        box-shadow: 0 0 0 2px ${Anique.colors.primary100};
        outline: 3px solid transparent;
    }

    padding: 0.25em 0.5em;
    position: relative;
`

const UnstyledTextField = styled("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.5em;
    font-family: ${Anique.font.secondary};
`

const TextFieldLabel = styled("span")`
    color : ${Anique.colors.onBg200};
    font-size : 0.8rem;
    margin-left : 0.25em;
`

export interface TextFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
    leadingIcon?: any
    trailingIcon?: any
    label?: string
    background ?: string
}

export function TextField(props: TextFieldProps) {
    const backgroundStyle = props.background || props.disabled == true ? ({
        background : props.background || (Anique.colors.bg500)
    }) : ({})
    return (
        <TextFieldContainer style={{
            ...backgroundStyle,
        }}>
            {props.label && <TextFieldLabel>{props.label}</TextFieldLabel>}
            <Row>
                {props.leadingIcon}
                <UnstyledTextField {...splitProps(props, ["leadingIcon", "trailingIcon", "label", "background"])[1]}/>
                {props.trailingIcon}
            </Row>
        </TextFieldContainer>
    )
}

export const TextArea = styled(Input.withComponent("textarea"))`
    resize: vertical;
    height: 8rem;
`