import {TextArea, BaseTextField, TextField} from "@qinetik/anique/textfield";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import Menu from "../icons/Menu";
import { InformationBoxOutline } from "@qinetik/anique-icons";
import {IconButton} from "@qinetik/anique/icon-button";
import {Anique} from "@qinetik/anique";

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
                    <IconButton size={-1}>
                        <InformationBoxOutline />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>With Trailing Icon</p>
            <TextField
                trailingIcon={
                    <IconButton size={-1}>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>With Leading & Trailing Icons</p>
            <TextField
                leadingIcon={
                    <IconButton size={-1}>
                        <InformationBoxOutline />
                    </IconButton>
                }
                trailingIcon={
                    <IconButton size={-1}>
                        <Menu />
                    </IconButton>
                }
                placeholder={"Type Here"}
            />
            <p>With Label, Leading & Trailing Icons</p>
            <TextField
                leadingIcon={
                    <IconButton size={-1}>
                        <InformationBoxOutline />
                    </IconButton>
                }
                trailingIcon={
                    <IconButton size={-1}>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>Background</p>
            <TextField
                leadingIcon={
                    <IconButton size={-1}>
                        <InformationBoxOutline />
                    </IconButton>
                }
                trailingIcon={
                    <IconButton size={-1}>
                        <Menu />
                    </IconButton>
                }
                background={Anique.colors.bg300}
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>Disabled</p>
            <TextField
                trailingIcon={
                    <IconButton size={-1}>
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
                    <IconButton>
                        <InformationBoxOutline />
                    </IconButton>
                }
                trailingIcon={
                    <IconButton>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
            <p>With Large Sized Icons</p>
            <TextField
                leadingIcon={
                    <IconButton size={2}>
                        <InformationBoxOutline />
                    </IconButton>
                }
                trailingIcon={
                    <IconButton size={2}>
                        <Menu />
                    </IconButton>
                }
                label={"Username"}
                placeholder={"Type Here"}
            />
        </Column>
    )
}