import {TextArea, BaseTextField, TextField} from "@qinetik/anique/textfield";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import Menu from "../icons/Menu";
import { InformationBoxOutline } from "@qinetik/anique-icons";
import {IconButton} from "@qinetik/anique/icon-button";
import {Anique, Icon} from "@qinetik/anique";

export function TextFieldPage() {
    return (
        <Column>
            <Headline>TextField</Headline>
            <h1>Basic Text Field</h1>
            <BaseTextField
                placeholder={"Username"}
            />
            <h1>Text Area</h1>
            <TextArea
                placeholder={"Note here"}
            />
            <h3>Disabled</h3>
            <Column gap={"0.5em"}>
                <BaseTextField
                    placeholder={"Username"}
                    value={"Something i wrote here"}
                    disabled
                />
                <TextArea
                    placeholder={"Note here"}
                    disabled
                >Something I wrote here</TextArea>
            </Column>
            <h1 style={{margin : "1em 0 0 0"}}>Labeled Text Field</h1>
            <p>Without Label & Icons</p>
            <TextField
                placeholder={"Type Here"}
            />
            <p>Without Icons</p>
            <TextField
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>With Leading Icon</p>
            <TextField
                leadingIcon={
                    <Icon>
                        <InformationBoxOutline />
                    </Icon>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>With Trailing Icon</p>
            <TextField
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>With Leading & Trailing Icons</p>
            <TextField
                leadingIcon={
                    <Icon>
                        <InformationBoxOutline />
                    </Icon>
                }
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                placeholder={"Type Here"}
            />
            <p>With Label, Leading & Trailing Icons</p>
            <TextField
                leadingIcon={
                    <Icon>
                        <InformationBoxOutline />
                    </Icon>
                }
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>Background</p>
            <TextField
                leadingIcon={
                    <Icon>
                        <InformationBoxOutline />
                    </Icon>
                }
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                background={Anique.colors.primary}
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>Disabled</p>
            <TextField
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                disabled
                placeholder={"Type Here"}
            />
            <p>With Normal Sized Icons</p>
            <TextField
                leadingIcon={
                    <Icon>
                        <InformationBoxOutline />
                    </Icon>
                }
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
        </Column>
    )
}