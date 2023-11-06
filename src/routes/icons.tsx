import {BaseTextField, ClickableCard, Column, Headline, Icon, Row, Spinner} from "@qinetik/anique";
import {createEffect, createSignal, For, lazy, Show} from "solid-js";
import {DocContainer} from "../components/common/layout/DocContainer";
import {DisplayCode} from "../components/common/code/DisplayCode";
import {styled} from "@qinetik/emotion";

const IconsContainer = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    box-sizing: border-box;
    padding: 1em 0;
`

const IconCardRoot = styled(ClickableCard)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
`

const StyledImg = styled("img")`
    width: 2.5rem;
    height: 2.5rem;

    .dark & {
        filter: invert();
    }

`

function IconCard(props: { icon: string }) {
    return (
        <IconCardRoot>
            <StyledImg
                loading="lazy"
                src={`https://qinetik.github.io/mdi-svg/svg/${props.icon}.svg`}
            />
            <small>{props.icon}</small>
        </IconCardRoot>
    )
}

let totalIcons: string[] = []

export default function IconsPage() {

    const [iconsSearch, setIconsSearch] = createSignal("")

    const [icons, setIcons] = createSignal<string[]>([])
    const [iconsErr, setIconsErr] = createSignal<any>(null)

    createEffect(() => {
        fetch("/anique/api/icons").then((e) => e.text()).then(text => {
            const start = "|||IconsStart|||"
            totalIcons = text.substring(text.indexOf(start) + start.length, text.lastIndexOf("|||IconsEnd|||")).split(",")
            setIcons(totalIcons)
        }).catch((err) => setIconsErr(err))
    })

    let search = true

    function searchIt(text: string) {
        if (text === "") setIcons(totalIcons)
        let searched: string[] = []
        let searchText = text.toLowerCase()
        for (let i = 0; i < totalIcons.length; i++) {
            if (search) {
                let item = totalIcons[i]
                if (item.toLowerCase().includes(searchText)) {
                    searched.push(item)
                }
            } else {
                return
            }
        }
        setIcons(searched)
    }

    let timer : any;

    function lazySearch(text: string) {
        search = false
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            search = true
            searchIt(text)
        }, 100)
    }

    return (
        <DocContainer>
            <Column gap={"0.5em"}>
                <Headline>Icons</Headline>
                <p>Anique has a library for icons called mdi, You can install it using</p>
                <Row gap={"0.75em"}>
                    <DisplayCode value={"npm i @qinetik/mdi"}/>
                    <DisplayCode value={"yarn add @qinetik/mdi"}/>
                </Row>
                <Show when={icons().length == 0 && iconsErr() == null}>
                    <Spinner/>
                </Show>
                <h2 style={{margin: 0}}>Search {icons().length} icons</h2>
                <BaseTextField
                    style={{width: "100%"}}
                    value={iconsSearch()}
                    onInput={(e) => {
                        setIconsSearch(e.currentTarget.value)
                        lazySearch(e.currentTarget.value)
                    }}
                    placeholder={"Search..."}
                />
                <IconsContainer>
                    <For each={icons()}>
                        {icon => <IconCard icon={icon}/>}
                    </For>
                </IconsContainer>
            </Column>
        </DocContainer>
    )
}