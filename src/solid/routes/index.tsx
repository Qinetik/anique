import {H1, H2, H3, H4} from "@qinetik/anique/headings";
import {Column} from "@qinetik/anique/column";
import {UL} from "@qinetik/anique/List";


export default function Home() {

    return (
        <Column>
            <H1>Anique for SolidJS & Astro</H1>

            <H2>What ?</H2>
            <p>
                Anique is a UI component library for SolidJS, Its built to be used with Astro,
                Several reasons why we love Anique
            </p>

            <UL>
                <li>
                    <H3>Lightweight</H3>
                    <p>Anique has no dependencies on external libraries except for its own CSS in JS library which is lightweight and feature rich</p>
                    <p>Paired with Astro, Anique delivers ready made components to the web</p>
                </li>
                <li>
                    <H3>CSS Variables under the hood</H3>
                    <p>
                        Yes we do use CSS in JS but the theme interface provides css variables which are minified,  This has several benefits
                    </p>
                    <UL>
                        <li>
                            <strong>TypeSafety</strong> : You access variables through a javascript interface, which at compile time convert to minified CSS Variables
                        </li>
                        <li>
                            <strong>Performance</strong> : When you use CSS in JS, If your theme changes, Every element needs to be updated, Javascript needs to run
                            on every element that uses the theme, But changing just one class name to change your entire website is better because browser handles it.
                        </li>
                        <li>
                            <strong>Supporting Astro</strong> : If you were to use javascript variables inside the elements, You would have to make all the elements client:only that depend on javascript to update them
                            By keeping everything free of javascript, Astro will render the HTML & CSS you provide, Theme changing would be handled by the browser
                        </li>
                        <li>
                            <strong>Ease of Use</strong> : You already know the easy of use CSS in JS provides, but having no runtime overhead makes it even better
                        </li>
                    </UL>
                    <p>
                        You can look at source code of this website, Its made using Anique
                    </p>
                </li>
                <li>
                    <H3>Css in JS</H3>
                    <p>Anique has its own CSS in JS library, which it depends on, The library makes use of <a
                        href={"/"}>emotion</a> in the background, so it offers a similar API, It has following set of
                        features, Its minimal as of now</p>
                    <UL>
                        <li>
                            Its runtime free but only If you use it with Astro, You get zero runtime overhead
                        </li>
                        <li>
                            A styled function which takes a tag or a component
                        </li>
                        <li>
                            shouldForwardProp function which determines whether a prop should be forwarded
                        </li>
                        <li>
                            keyframes function to create keyframes component
                        </li>
                        <li>
                            css function to use direct css
                        </li>
                    </UL>
                </li>
                <li>
                    <H3>Typesafe</H3>
                    <p>Anique uses typescript and is typesafe</p>
                </li>
                <li>
                    <H3>Minimal & Performant</H3>
                    <p>Anique is minimal, We don't want to introduce components that aren't needed.</p>
                </li>
            </UL>

            <H2>Inspiration</H2>
            <p>
                We take inspiration from Radix-UI, We want to make something similar, only without React
            </p>

            <H2>Why ?</H2>
            <p>
                There are many UI libraries but They all have their pros and cons & these cons unfortunately
                outweigh the pros.
            </p>

            <UL>
                <li>
                    <H4>Not enough libraries</H4>
                    <p>
                        Wait, I just said there are many UI component libraries, Well, Although there's too many UI
                        component libraries, There aren't enough libraries for SolidJS that are good.
                    </p>
                </li>
                <li>
                    <H4>SUID (MUI)</H4>
                    <p>
                        There's a port of MUI for SolidJS which is good, The UI is amazing, The components work &
                        everything. The cons are the legacy style system.
                    </p>
                </li>
                <li>
                    <H4>Other Libraries</H4>
                    <p>
                        There are other UI component libraries that use different set of technologies & then user
                        must also adopt those technologies in order to write their UI.
                        For me, I prefer <code>CSS in JS</code> which doesn't happen to be their choice.
                    </p>
                </li>
            </UL>
        </Column>
    );
}
