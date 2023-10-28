import {Text} from "@qinetik/anique/text";
import {Column, Headline} from "@qinetik/anique";

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
export default function NotFoundPage() {
    return (
        <Column>
            <Headline style={headingStyles}>Page not found</Headline>
            <section style={paragraphStyles}>
                <h2>Sorry, we could not find what you were looking for<br/></h2>
                <Text><a href="/anique">Go home</a></Text>
            </section>
        </Column>
    );
}