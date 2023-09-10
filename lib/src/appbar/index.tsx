import {styled} from "@qinetik/emotion";
import {H3} from "../headings";

export interface AppBarProps {
    navIcon?: any
    title: string
    actions?: any
}

const AppBarContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1em;
    height: 4em;
    background: ${p => p.theme.colors.bg300};
`

const NavIconContainer = styled('div')`
    margin-right: 1rem;
`

const TitleContainer = styled(H3)`

`

const GrowingSpacer = styled("div")`
    flex: 1;
`

const AppBarActions = styled("div")`

`

export function AppBar(props: AppBarProps) {
    return (
        <AppBarContainer>
            {props.navIcon != null ? (
                <NavIconContainer>
                    {props.navIcon}
                </NavIconContainer>
            ) : null}
            <TitleContainer>
                {props.title}
            </TitleContainer>
            <GrowingSpacer/>
            {props.actions != null ? (
                <AppBarActions>
                    {props.actions}
                </AppBarActions>
            ) : null}
        </AppBarContainer>
    )
}