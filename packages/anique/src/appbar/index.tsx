import {styled} from "@qinetik/emotion";
import {H3} from "../headline";
import {Anique} from "../theme/Theme";

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
`

const AppBarNavIcon = styled('div')`
  margin-right: 1rem;
`

const AppBarTitle = styled("h3")`
  flex : 1;
`

const AppBarActions = styled("div")`

`

export function AppBar(props: AppBarProps) {
    return (
        <AppBarContainer>
            {props.navIcon != null ? (
                <AppBarNavIcon>
                    {props.navIcon}
                </AppBarNavIcon>
            ) : null}
            <AppBarTitle>
                {props.title}
            </AppBarTitle>
            {props.actions != null ? (
                <AppBarActions>
                    {props.actions}
                </AppBarActions>
            ) : null}
        </AppBarContainer>
    )
}