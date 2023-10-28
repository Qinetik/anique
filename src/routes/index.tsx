import {DocContainer} from "../components/common/layout/DocContainer";
import {Column} from "@qinetik/anique/column";
import {Headline, Size, UL} from "@qinetik/anique";
import {Roadmap} from "../components/main/Roadmap";

export default function Home() {
    return (
        <DocContainer>

            <Column gap={"1em"}>

                <Headline style={{margin: 0}} size={Size.Large}>Anique</Headline>

                <p>
                    Anique is a SolidJS UI Component Library that is Performant, Minimal & Very flexible in terms of
                    usage and build using its own CSS in JS library which is very fast and supports SRR
                </p>

                <h2 style={{margin: 0}}>Features</h2>

                <UL>
                    <li>CSS in JS powered Styles Components with Familiar API based on Emotion</li>
                    <li>Performant SSG and SSR, Components inline to HTML & CSS</li>
                    <li>Lovely User Experience & Lightening Speed</li>
                </UL>

                <h2>Roadmap</h2>

                <Roadmap />

            </Column>

            <div style={{ "margin-bottom" : "2em" }}/>

        </DocContainer>
    )
}
