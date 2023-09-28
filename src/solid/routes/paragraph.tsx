import {PageContainer} from "../components/PageContainer";
import {H1} from "@qinetik/anique/headings";
import {Card} from "@qinetik/anique/card";
import {P} from "@qinetik/anique/paragraph";
import {Column} from "@qinetik/anique/column";

export default function Paragraph() {
    return (
        <Column>
            <H1>Paragraph</H1>
            <Card>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </P>
            </Card>
        </Column>
    )
}