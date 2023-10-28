// @refresh reload
import {Suspense} from 'solid-js'
import {Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title} from 'solid-start'

export default function Root() {
    return (
        <Html lang="en" class={"dark"}>
            <Head>
                <Title>Anique | SolidJS</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Body>
                <ErrorBoundary>
                    <Suspense>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
                <Scripts/>
            </Body>
        </Html>
    )
}
