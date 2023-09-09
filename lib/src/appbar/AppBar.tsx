import {styled} from "@qinetik/emotion";
import {H3, H6} from "../headings";

export interface AppBarProps {
    navIcon?: () => any
    title: string
}

const AppBarContainer = styled('div')`
    display: flex;
    flex-direction: row;
    height: 4em;
    background: ${p => p.theme.colors.bg100};
`

const NavIconContainer = styled('div')`

`

const TitleContainer = styled(H3)`
    margin-left: 1rem;
`

export function AppBar(props: AppBarProps) {
    return (
        <AppBarContainer>
            {props.navIcon != null ? (
                <NavIconContainer>
                    {props.navIcon()}
                </NavIconContainer>
            ) : null}
            <TitleContainer>
                {props.title}
            </TitleContainer>
        </AppBarContainer>
    )
}