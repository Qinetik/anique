import {
    Show,
    For,
    splitProps,
    mergeProps,
    Component,
    ParentComponent,
    createEffect,
    on,
    createContext,
    useContext,
} from "solid-js";
import {
    createSelect,
    Option as OptionType,
    Value as ValueType,
    CreateSelectProps,
} from "./create-select";
import {styled} from "@qinetik/emotion";
import {Anique} from "../theme/Theme";

interface CommonProps {
    format: (
        data: OptionType | ValueType,
        type: "option" | "value"
    ) => string | undefined;
    placeholder?: string;
    id?: string;
    name?: string;
    class?: string;
    autofocus?: boolean;
    readonly?: boolean;
    loading?: boolean;
    loadingPlaceholder?: string;
    emptyPlaceholder?: string;
}

type SelectReturn = ReturnType<typeof createSelect>;

type SelectProps = CreateSelectProps & Partial<CommonProps>;

const SelectContext = createContext<SelectReturn>();

const useSelect = () => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("No SelectContext found in ancestry.");
    return context;
};

const Select: Component<SelectProps> = (props) => {
    const [selectProps, local] = splitProps(
        mergeProps(
            {
                format: ((data, type) => data) as CommonProps["format"],
                placeholder: "Select...",
                readonly: typeof props.options !== "function",
                loading: false,
                loadingPlaceholder: "Loading...",
                emptyPlaceholder: "No options",
            },
            props
        ),
        [
            "options",
            "optionToValue",
            "isOptionDisabled",
            "multiple",
            "disabled",
            "onInput",
            "onChange",
        ]
    );
    const select = createSelect(selectProps);

    createEffect(
        on(
            () => local.initialValue,
            (value) => value !== undefined && select.setValue(value)
        )
    );

    return (
        <SelectContext.Provider value={select}>
            <Container class={local.class}>
                <Control
                    id={local.id}
                    name={local.name}
                    format={local.format}
                    placeholder={local.placeholder}
                    autofocus={local.autofocus}
                    readonly={local.readonly}
                />
                <List
                    loading={local.loading}
                    loadingPlaceholder={local.loadingPlaceholder}
                    emptyPlaceholder={local.emptyPlaceholder}
                    format={local.format}
                />
            </Container>
        </SelectContext.Provider>
    );
};

type ContainerProps = Pick<CommonProps, "class">;

const ContainerDiv = styled("div")`
    position: relative;
    background-color : ${Anique.colors.bg200};
    border-radius : ${Anique.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`

const Container: ParentComponent<ContainerProps> = (props) => {
    const select = useSelect();
    return (
        <ContainerDiv
            class={`solid-select-container${
                props.class !== undefined ? (" " + props.class) : ""
            }`}
            data-disabled={select.disabled}
            onFocusIn={select.onFocusIn}
            onFocusOut={select.onFocusOut}
            onMouseDown={(event) => {
                select.onMouseDown(event);
                event.currentTarget.getElementsByTagName("input")[0].focus();
            }}
        >
            {props.children}
        </ContainerDiv>
    );
};

type ControlProps = Omit<CommonProps, "class">;

const SolidSelectControlDiv = styled("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${Anique.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${Anique.colors.bg200};
    max-width: 25rem;
    grid-template-columns: repeat(1,minmax(0,1fr));;


    &[data-multiple="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-has-value="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-disabled="true"] {
        border-color: ${Anique.colors.onBg500};
        background-color: ${Anique.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${Anique.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`

const Control: Component<ControlProps> = (props) => {
    const select = useSelect();

    const removeValue = (index: number) => {
        const value = select.value();
        select.setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    };

    return (
        <SolidSelectControlDiv
            class="solid-select-control"
            data-multiple={select.multiple}
            data-has-value={select.hasValue()}
            data-disabled={select.disabled}
            onClick={select.onClick}
        >
            <Show when={!select.hasValue() && !select.hasInputValue()}>
                <Placeholder>{props.placeholder}</Placeholder>
            </Show>
            <Show
                when={select.hasValue() && !select.multiple && !select.hasInputValue()}
            >
                <SingleValue>{props.format(select.value(), "value")}</SingleValue>
            </Show>
            <Show when={select.hasValue() && select.multiple}>
                <For each={select.value()}>
                    {(value, index) => (
                        <MultiValue onRemove={() => removeValue(index())}>
                            {props.format(value, "value")}
                        </MultiValue>
                    )}
                </For>
            </Show>
            <Input
                id={props.id}
                name={props.name}
                autofocus={props.autofocus}
                readonly={props.readonly}
            />
        </SolidSelectControlDiv>
    );
};

type PlaceholderProps = Pick<CommonProps, "placeholder">;

const PlaceholderDiv = styled("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`

const Placeholder: ParentComponent<PlaceholderProps> = (props) => {
    return <PlaceholderDiv class={"solid-select-placeholder"}>{props.children}</PlaceholderDiv>;
};

const SingleValueDiv = styled("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`

const SingleValue: ParentComponent<{}> = (props) => {
    return <SingleValueDiv class={"solid-select-single-value"}>{props.children}</SingleValueDiv>;
};

const MultiValueDiv = styled("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${Anique.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`

const MultiValueRemoveButton = styled("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`

const MultiValue: ParentComponent<{ onRemove: () => void }> = (props) => {
    const select = useSelect();

    return (
        <MultiValueDiv
            class={"solid-select-multi-value"}
        >
            {props.children}
            <MultiValueRemoveButton
                type="button"
                class={"solid-select-multi-value-remove"}
                onClick={(event: MouseEvent) => {
                    event.stopPropagation();
                    props.onRemove();
                }}
            >
                ⨯
            </MultiValueRemoveButton>
        </MultiValueDiv>
    );
};

type InputProps = Pick<CommonProps, "id" | "name" | "autofocus" | "readonly">;

const SolidSelectInput = styled("input")`
    grid-column-start: 1;
    grid-row-start: 1;
    flex: 1;
    background-color: transparent;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    cursor: default;
    caret-color: transparent;

    &[data-multiple=true] {
        caret-color: currentColor;
    }

    &[data-is-active=true] {
        caret-color: currentColor;
    }
`

const Input: Component<InputProps> = (props) => {
    const select = useSelect();
    return (
        <SolidSelectInput
            id={props.id}
            name={props.name}
            data-multiple={select.multiple}
            data-is-active={select.isActive()}
            type="text"
            tabIndex={0}
            class={"solid-select-input"}
            autocomplete="off"
            autocapitalize="none"
            autofocus={props.autofocus}
            readonly={props.readonly}
            disabled={select.disabled}
            size={1}
            value={select.inputValue()}
            onInput={select.onInput}
            onKeyDown={(event: KeyboardEvent) => {
                select.onKeyDown(event);
                if (!event.defaultPrevented) {
                    if (event.key === "Escape") {
                        event.preventDefault();
                        event.stopPropagation();
                        (event.target as HTMLElement).blur();
                    }
                }
            }}
            onMouseDown={(event) => {
                event.stopPropagation();
            }}
        />
    );
};

type ListProps = Pick<
    CommonProps,
    "loading" | "loadingPlaceholder" | "emptyPlaceholder" | "format"
>;

const SolidSelectList = styled("div")`
    position: absolute;
    min-width: 100%;
    background: inherit;
    color: inherit;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    border-radius: 0.125rem; /* This is equivalent to rounded-sm in Windi CSS */
    margin-top: 0.25rem; /* This is equivalent to mt-1 in Windi CSS */
    padding: 0.5rem; /* This is equivalent to p-2 in Windi CSS */
    z-index: 1;
    overflow-y: auto;
    max-height: 50vh;
`

const SolidSelectListPlaceholder = styled("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`

const List: Component<ListProps> = (props) => {
    const select = useSelect();

    return (
        <Show when={select.isOpen()}>
            <SolidSelectList class={"solid-select-list"}>
                <Show
                    when={!props.loading}
                    fallback={
                        <SolidSelectListPlaceholder class="solid-select-list-placeholder">
                            {props.loadingPlaceholder}
                        </SolidSelectListPlaceholder>
                    }
                >
                    <For
                        each={select.options()}
                        fallback={
                            <SolidSelectListPlaceholder class={"solid-select-list-placeholder"}>
                                {props.emptyPlaceholder}
                            </SolidSelectListPlaceholder>
                        }
                    >
                        {(option: OptionType) => (
                            <Option option={option}>{props.format(option, "option")}</Option>
                        )}
                    </For>
                </Show>
            </SolidSelectList>
        </Show>
    );
};

type OptionProps = {
    option: OptionType;
};

const SolidSelectOption = styled("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${Anique.colors.bg200};
    border-radius : ${Anique.border.smRadius};
    color : ${Anique.colors.onBg200};

    &:hover {
        background-color: ${Anique.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${Anique.colors.bg400};
    }

    &[data-disabled=true] {
        pointer-events: none;
        color: #999999;
    }

    & mark {
        text-decoration: underline;
        background-color: unset;
        color: unset;
    }

`

const Option: ParentComponent<OptionProps> = (props) => {
    const select = useSelect();

    const scrollIntoViewOnFocus = (element: HTMLDivElement) => {
        createEffect(() => {
            if (select.isOptionFocused(props.option)) {
                element.scrollIntoView({block: "nearest"});
            }
        });
    };

    return (
        <SolidSelectOption
            ref={scrollIntoViewOnFocus}
            data-disabled={select.isOptionDisabled(props.option)}
            data-focused={select.isOptionFocused(props.option)}
            onClick={() => select.pickOption(props.option)}
            class={"solid-select-option"}
        >
            {props.children}
        </SolidSelectOption>
    );
};

export {
    Select,
    Container,
    Control,
    Placeholder,
    SingleValue,
    MultiValue,
    Input,
    List,
    Option,
    SelectContext,
    useSelect,
};