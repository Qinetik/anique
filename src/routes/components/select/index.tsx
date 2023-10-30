import {Column} from "@qinetik/anique/column";
import {Headline} from "@qinetik/anique/headline";
import {createAsyncOptions, createOptions, Select} from "@qinetik/anique";
import {createSignal, createUniqueId, For} from "solid-js";
import {Card} from "@qinetik/anique/card";
import {Button} from "@qinetik/anique/button";
import {Row} from "@qinetik/anique/row";
import {DocContainer} from "../../../components/common/layout/DocContainer";

const ReactiveExample = () => {
    const optionSets = {
        fruit: ["apple", "banana", "pear", "pineapple", "kiwi"],
        starwars: ["jedi", "sith", "stormtrooper", "luke", "leia"],
    };
    const [activeSet, setActiveSet] = createSignal("fruit");

    return (
        <Select
            options={optionSets[activeSet()]}
            onChange={() =>
                setActiveSet(activeSet() === "fruit" ? "starwars" : "fruit")
            }
        />
    );
};

const FormatExample = () => {
    const options = [
        {name: "apple", label: "🍏 Apple"},
        {name: "banana", label: "🍌 Banana"},
        {name: "pear", label: "🍐 Pear"},
        {name: "pineapple", label: "🍍 Pineappe"},
        {name: "kiwi", label: "🥝 Kiwi"},
    ];

    const format = (item, type) => (type === "option" ? item.label : item.name);

    const [value, setValue] = createSignal(null);

    return (
        <div class="flex flex-1 flex-col max-w-100 gap-3">
            <Select options={options} format={format} onChange={setValue}/>
            <div class="text-sm">Current value: {JSON.stringify(value())}</div>
        </div>
    );
};

const ResetExample = () => {
    const [initialValue, setInitialValue] = createSignal(null, {equals: false});
    return (
        <>
            <Select
                initialValue={initialValue()}
                options={["apple", "banana", "pear", "pineapple", "kiwi"]}
            />
            <button class="primary-button" onClick={() => setInitialValue(null)}>
                Reset
            </button>
        </>
    );
};

const fetchData = async (inputValue) => {
    return await new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(
                    ["apple", "banana", "pear", "pineapple", "kiwi"].filter((option) =>
                        option.startsWith(inputValue)
                    )
                ),
            2000
        );
    });
};

const AsyncFetchExample = () => {
    const props = createAsyncOptions(fetchData);
    return <Select {...props} />;
};

const FilterableExample = () => {
    const props = createOptions(["apple", "banana", "pear", "pineapple", "kiwi"]);
    return <Select {...props} />;
};

const FilterableObjectsExample = () => {
    const props = createOptions(
        [
            { name: "apple" },
            { name: "banana" },
            { name: "pear" },
            { name: "pineapple" },
            { name: "kiwi" },
        ],
        { key: "name" }
    );
    return <Select {...props} />;
};

const CreateableExample = () => {
    const props = createOptions(
        ["apple", "banana", "pear", "pineapple", "kiwi"],
        { createable: true }
    );
    return <Select {...props} />;
};

const CreateableObjectsExample = () => {
    const props = createOptions(
        [
            { name: "apple" },
            { name: "banana" },
            { name: "pear" },
            { name: "pineapple" },
            { name: "kiwi" },
        ],
        {
            key: "name",
            createable: true,
        }
    );
    return <Select {...props} />;
};

const MultipleExample = () => (
    <Select multiple options={["apple", "banana", "pear", "pineapple", "kiwi"]} />
);

const MultipleFilterableExample = () => {
    const props = createOptions(["apple", "banana", "pear", "pineapple", "kiwi"]);
    return <Select multiple {...props} />;
};

const MultipleCreateableExample = () => {
    const props = createOptions(
        ["apple", "banana", "pear", "pineapple", "kiwi"],
        {
            createable: true,
        }
    );
    return <Select multiple {...props} />;
};

const DisabledOptionsExample = () => (
    <Select
        options={["apple", "banana", "pear", "pineapple", "kiwi"]}
        isOptionDisabled={(option) => option === "pear"}
    />
);

interface Group {
    name: string;
    options: { name: string }[];
}

const createGroupedOptions = (groups: Group[]) => {
    const values = groups.reduce((values, group) => {
        values.push(
            ...group.options.map((item) => ({ ...item, group: group.name }))
        );
        return values;
    }, []);

    const props = createOptions(values, { key: "name" });
    const originalOptions = props.options;

    props.options = (inputValue) => {
        const options = originalOptions(inputValue);

        const grouped = options.reduce((result, item) => {
            const group = item.value.group;
            if (!result.has(group)) result.set(group, []);
            result.get(group).push(item);
            return result;
        }, new Map());

        const groupedOptions = [];
        for (const [groupName, options] of grouped.entries()) {
            groupedOptions.push({
                label: <span class="text-sm uppercase">{groupName}</span>,
                value: groupName,
                disabled: true,
            });
            groupedOptions.push(...options);
        }

        return groupedOptions;
    };

    return props;
};

const GroupingExample = () => {
    const props = createGroupedOptions([
        {
            name: "Fruits",
            options: [
                { name: "apple" },
                { name: "banana" },
                { name: "kiwi" },
                { name: "pear" },
                { name: "pineapple" },
            ],
        },
        {
            name: "Vegetables",
            options: [
                { name: "lettuce" },
                { name: "cabbage" },
                { name: "carrot" },
                { name: "potatoe" },
            ],
        },
    ]);

    return <Select {...props} />;
};

const AutoScrollExample = () => (
    <Select options={[...Array(50).keys()]} />
);

const KitchenSinkExample = () => {
    const createValue = (name) => {
        return { id: createUniqueId(), name };
    };

    const candidates = [
        createValue("apple"),
        createValue("banana"),
        createValue("pear"),
        createValue("pineapple"),
        createValue("kiwi"),
    ];

    const initialValue = [candidates[2]];

    const [options, setOptions] = createSignal(candidates);
    const [selectedValues, setSelectedValues] = createSignal(initialValue);

    const onChange = (selected) => {
        setSelectedValues(selected);

        const lastValue = selected[selected.length - 1];
        if (lastValue && !options().includes(lastValue)) {
            setOptions([...options(), lastValue]);
        }
    };

    const props = createOptions(options, {
        key: "name",
        disable: (value) => selectedValues().includes(value),
        filterable: true, // Default
        createable: createValue,
    });

    return (
        <Column gap={"0.5em"}>
            <Select
                multiple
                initialValue={selectedValues()}
                onChange={onChange}
                {...props}
            />
            <Row gap={"0.5em"}>
                <span>Quick pick:</span>
                <For
                    each={options()
                        .filter((option) => !selectedValues().includes(option))
                        .slice(0, 3)}
                >
                    {(option) => (
                        <Button
                            onClick={() => setSelectedValues([...selectedValues(), option])}
                        >
                            {option.name}
                        </Button>
                    )}
                </For>
            </Row>
        </Column>
    );
};

export default function SelectPage() {
    return (
        <DocContainer>
            <Column>
                <Headline>Select</Headline>
                <h1>Examples</h1>
                <h2>Static</h2>
                <Select
                    options={["apple", "banana", "pear", "pineapple", "kiwi"]}
                />
                <h2>Disabled</h2>
                <Select
                    disabled={true}
                    options={["apple", "banana", "pear", "pineapple", "kiwi"]}
                />
                <h2>Reactive</h2>
                <ReactiveExample/>
                <h2>Format</h2>
                <FormatExample/>
                <h2>Reset</h2>
                <ResetExample/>
                <h2>Async</h2>
                <AsyncFetchExample />
                <h2>Filterable</h2>
                <FilterableExample />
                <h2>Filterable (Objects)</h2>
                <FilterableObjectsExample />
                <h2>Creatable</h2>
                <CreateableExample />
                <h2>Creatable (Objects)</h2>
                <CreateableObjectsExample />
                <h2>Multiple</h2>
                <MultipleExample />
                <h2>Multiple Filterable</h2>
                <MultipleFilterableExample />
                <h2>Multiple Creatable</h2>
                <MultipleCreateableExample />
                <h2>Disabled Options</h2>
                <DisabledOptionsExample />
                <h2>Grouping</h2>
                <GroupingExample />
                <h2>Auto Scroll</h2>
                <AutoScrollExample />
                <h2>Kitchen Sink</h2>
                <KitchenSinkExample />
            </Column>
        </DocContainer>
    )
}