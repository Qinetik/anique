import {H1, H2, H4} from "@qinetik/anique/headings";
import {P} from "@qinetik/anique/paragraph";
import {PageContainer} from "../components/PageContainer";
import {Column} from "@qinetik/anique/column";


export default function Home() {

    return (
        <Column>
            <H1>Anique for SolidJS</H1>

            <H2>What ?</H2>
            <P>
                Anique is a UI component library for SolidJS, Several reasons why we love Anique
            </P>

            <ul>
                <li>
                    <H4>Lightweight</H4>
                    <P>Anique has no dependencies on external libraries except for a CSS in JS library, Its
                        lightweight</P>
                </li>
                <li>
                    <H4>Css in JS</H4>
                    <P>Anique has its own CSS in JS library, which it depends on, The library makes use of <a
                        href={"/"}>emotion</a> in the background, so it offers a similar API, We hope to make this
                        library runtime free in the future, if we don't die of old age, It has following set of
                        features, Its minimal as of now</P>
                    <ul>
                        <li>
                            A styled function which takes a tag or a component
                        </li>
                        <li>
                            shouldForwardProp function which determines whether a prop should be forwarded
                        </li>
                    </ul>
                </li>
                <li>
                    <H4>Typesafe</H4>
                    <P>Anique uses typescript and is typesafe</P>
                </li>
                <li>
                    <H4>Minimal & Performant</H4>
                    <P>Anique has minimal set of components and is therefore performant, We plan make it more
                        customizable without affecting the performance</P>
                </li>
            </ul>

            <H2>Why ?</H2>
            <P>
                There are many UI component libraries, They all have their pros and cons but these cons unfortunately
                outweigh the pros.
            </P>

            <ul>
                <li>
                    <H4>Not enough libraries</H4>
                    <P>
                        Wait, I just said there are many UI component libraries, Well, Although there's too many UI
                        component libraries, There aren't enough libraries for SolidJS that are good.
                    </P>
                </li>
                <li>
                    <H4>Framework Independent Libraries</H4>
                    <P>
                        Framework independent libraries are good, since they don't tie you to a framework, but then
                        why use a framework like Solid or React in the first place,
                        Otherwise these libraries have their own learning curve apart from the framework and aren't
                        easy to integrate or use for a beginner.
                        Personally, if you enjoy writing UI in these libraries, go for it.
                    </P>
                </li>
                <li>
                    <H4>SUID (MUI)</H4>
                    <P>
                        There's a port of MUI for SolidJS which is good, The UI is amazing, The components work &
                        everything. The cons are the legacy style system, complicated naming & components.We actually
                        tried forking SUID, but we gave up since the code written was really hard to tinker with.
                    </P>
                </li>
                <li>
                    <H4>Other Libraries</H4>
                    <P>
                        There are other UI component libraries that use different set of technologies & then user
                        must also adopt those technologies in order to write their UI.
                        For me, I prefer <code>CSS in JS</code> which doesn't happen to be their choice.
                    </P>
                </li>
            </ul>
        </Column>
    );
}
