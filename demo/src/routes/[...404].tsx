import {A, Title} from "solid-start";
import {HttpStatusCode} from "solid-start/server";
import {PageContainer} from "../components/PageContainer";
import {H1, H2} from "@qinetik/anique/headings";
import {Text} from "@qinetik/anique/text";

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
// const codeStyles = {
//     color: "#8A6534",
//     padding: 4,
//     backgroundColor: "#FFF4DB",
//     fontSize: "1.25rem",
//     borderRadius: 4,
// }

export default function NotFound() {
    return (
        <PageContainer style={pageStyles}>
            <Title>Not Found</Title>
            <HttpStatusCode code={404}/>
            <H1 style={headingStyles}>Page not found</H1>
            <section style={paragraphStyles}>
                <H2>Sorry 😔, we could not find what you were looking for<br/></H2>
                <Text><A href="/">Go home</A></Text>
            </section>
        </PageContainer>
    );
}
