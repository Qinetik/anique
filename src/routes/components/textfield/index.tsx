import {BaseTextField, TextArea, TextField} from "@qinetik/anique/textfield";
import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {InformationBoxOutline} from "@qinetik/anique-icons";
import {IconButton} from "@qinetik/anique/icon-button";
import {Anique, Icon, Spacer} from "@qinetik/anique";
import Menu from "../../../solid/icons/Menu";
import {DocContainer} from "../../../components/common/layout/DocContainer";
import BasicTextFieldExample from "./examples/BasicTextFieldExample";
import {ComponentExample} from "../../../solid/components/ComponentExample";
import BasicTextAreaExample from "./examples/BasicTextAreaExample";
import DisabledFieldAreaExample from "./examples/DisabledFieldAreaExample";
import TextFieldFullIconsExample from "./examples/TextFieldFullIconsExample";

export default function TextFieldPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>TextField</Headline>
                <h1>Basic Text Field</h1>
                <ComponentExample component={BasicTextFieldExample} />
                <h1>Text Area</h1>
                <ComponentExample component={BasicTextAreaExample} />
                <h4>Disabled</h4>
                <ComponentExample component={DisabledFieldAreaExample} />
                <h1>Labeled Text Field</h1>
                <ComponentExample component={TextFieldFullIconsExample} />
                <h3>Other TextField Usages</h3>
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
                            <InformationBoxOutline/>
                        </Icon>
                    }
                    label={"Username"}
                    placeholder={"Type Here"}
                />
                <p>With Trailing Icon</p>
                <TextField
                    trailingIcon={
                        <IconButton>
                            <Menu/>
                        </IconButton>
                    }
                    label={"Username"}
                    placeholder={"Type Here"}
                />
                <p>With Leading & Trailing Icons</p>
                <TextField
                    leadingIcon={
                        <Icon>
                            <InformationBoxOutline/>
                        </Icon>
                    }
                    trailingIcon={
                        <IconButton>
                            <Menu/>
                        </IconButton>
                    }
                    placeholder={"Type Here"}
                />
                <p>Styled</p>
                <TextField
                    leadingIcon={
                        <Icon>
                            <InformationBoxOutline/>
                        </Icon>
                    }
                    trailingIcon={
                        <IconButton>
                            <Menu/>
                        </IconButton>
                    }
                    label={"Username"}
                    placeholder={"Type Here"}
                    containerProps={{
                        style: {
                            background: Anique.colors.primary
                        }
                    }}
                />
                <p>Disabled</p>
                <TextField
                    trailingIcon={
                        <IconButton>
                            <Menu/>
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
                            <InformationBoxOutline/>
                        </Icon>
                    }
                    trailingIcon={
                        <IconButton>
                            <Menu/>
                        </IconButton>
                    }
                    label={"Username"}
                    placeholder={"Type Here"}
                />
            </Column>
        </DocContainer>
    )
}