import {styled} from "@qinetik/emotion";
import {JSX, splitProps} from "solid-js";
import {Spacer} from "../utils";

export interface AppBarProps extends JSX.HTMLAttributes<HTMLDivElement> {
    navIcon?: any
    title: any
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
        <AppBarContainer {...splitProps(props, ["navIcon", "title", "actions"])[1]}>
            {props.navIcon != null ? (
                <AppBarNavIcon>
                    {props.navIcon}
                </AppBarNavIcon>
            ) : <Spacer width={"0.75em"} />}
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