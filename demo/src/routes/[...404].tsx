import {A, Title} from "solid-start";
import {HttpStatusCode} from "solid-start/server";

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
        <main style={pageStyles}>
            <Title>Not Found</Title>
            <HttpStatusCode code={404}/>
            <h1 style={headingStyles}>Page not found</h1>
            <section style={paragraphStyles}>
                <h2>Sorry 😔, we could not find what you were looking for<br/></h2>
                <A href="/">Go home</A>
            </section>
        </main>
    );
}
