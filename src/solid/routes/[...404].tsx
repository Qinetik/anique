import {PageContainer} from "../components/PageContainer";
import {H1, H2} from "../../../packages/anique/src/headline";
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
            <title>Not Found</title>
            <H1 style={headingStyles}>Page not found</H1>
            <section style={paragraphStyles}>
                <H2>Sorry 😔, we could not find what you were looking for<br/></H2>
                <Text><a href="/">Go home</a></Text>
            </section>
        </PageContainer>
    );
}
