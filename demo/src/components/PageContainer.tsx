import {styled, ThemeProvider} from "@qinetik/emotion";
import {A, Title} from "solid-start";
import {ColorScheme, getSystemColorScheme, onSystemColorSchemeChange} from "@qinetik/anique/theme/useColorScheme";
import {Column} from "@qinetik/anique/column";
import {AppBar} from "@qinetik/anique/appbar";
import {IconButton, IconButtonSize} from "@qinetik/anique/icon-button";
import MenuIcon from "../icons/Menu";
import {DrawerItem, DrawerSectionItem, ModalDrawer} from "@qinetik/anique/drawer";
import {createEffect, createSignal, JSX} from "solid-js";
import {darkTheme, lightTheme} from "@qinetik/anique/theme/Default";
import LightDarkIcon from "../icons/LightDarkIcon";
import {Row} from "@qinetik/anique/row";

const Link = styled(A)`
    text-decoration: none;
    color: ${p => p.theme.colors.onBg100};
`

export interface PageContainerProps {
    children?: any
    style?: JSX.CSSProperties
}

export function PageContainer(props: PageContainerProps) {

    const [isDrawerOpen, setIsDrawerOpen] = createSignal(false)
    const [colorScheme, setColorScheme] = createSignal(ColorScheme.Dark)

    createEffect(() => {
        setColorScheme(getSystemColorScheme())
        onSystemColorSchemeChange(setColorScheme)
    })

    const theme = () => (colorScheme() == ColorScheme.Dark ? darkTheme : lightTheme)

    const style = props.style || {}

    return (
        <ThemeProvider theme={theme}>

            <Title>Anique | UI</Title>

            <style>{`

                    :root {
                        color-scheme: ${colorScheme() === ColorScheme.Dark ? "dark" : "light"};
                        font-size: 15px;
                        color: ${theme().colors.onBg};
                        font-family: 'Roboto', 'Helvetica', sans-serif;
                    }

                `}</style>

            <Column>

                <AppBar
                    navIcon={
                        <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen())}>
                            <MenuIcon/>
                        </IconButton>
                    }
                    title={"Anique"}
                    actions={(
                        <Row>
                            <IconButton
                                onClick={() => setColorScheme(colorScheme() == ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark)}
                                size={IconButtonSize.Medium}
                            >
                                <LightDarkIcon/>
                            </IconButton>
                        </Row>
                    )}
                />

                <ModalDrawer
                    isOpen={isDrawerOpen}
                    onCloseRequest={() => setIsDrawerOpen(false)}
                >
                    <Link href={"/"}>
                        <DrawerItem>
                            Home
                        </DrawerItem>
                    </Link>
                    <DrawerSectionItem title={"Components"} indent={false}>

                        <DrawerSectionItem title={"Interactive"}>
                            <Link href={"/fab"}><DrawerItem>
                                Floating Action Button
                            </DrawerItem></Link>
                            <Link href={"/button"}><DrawerItem>
                                Button
                            </DrawerItem></Link>
                            <Link href={"/checkbox"}><DrawerItem>
                                Checkbox
                            </DrawerItem></Link>
                            <Link href={"/radio"}><DrawerItem>
                                Radio
                            </DrawerItem></Link>
                        </DrawerSectionItem>
                        <DrawerSectionItem title={"Layout"}>
                            <Link href={"/column"}><DrawerItem>
                                Column
                            </DrawerItem></Link>
                            <Link href={"/row"}><DrawerItem>
                                Row
                            </DrawerItem></Link>
                            <Link href={"/dialog"}><DrawerItem>
                                Dialog
                            </DrawerItem></Link>
                            <Link href={"/appbar"}><DrawerItem>
                                AppBar
                            </DrawerItem></Link>
                        </DrawerSectionItem>
                        <DrawerSectionItem title={"Text"}>
                            <Link href={"/headings"}><DrawerItem>
                                Headings
                            </DrawerItem></Link>
                            <Link href={"/paragraph"}><DrawerItem>
                                Paragraph
                            </DrawerItem></Link>
                        </DrawerSectionItem>
                        <DrawerSectionItem title={"Other"}>
                            <Link href={"/spinner"}><DrawerItem>
                                Spinner
                            </DrawerItem></Link>
                        </DrawerSectionItem>
                    </DrawerSectionItem>

                </ModalDrawer>

                <div style={{
                    margin: "0rem 6rem",
                    ...style
                }}>
                    {props.children}
                </div>
            </Column>

        </ThemeProvider>

    )
}