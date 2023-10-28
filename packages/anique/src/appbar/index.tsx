import {styled} from "@qinetik/emotion";
import {JSX, JSXElement, Match, Show, splitProps, Switch} from "solid-js";
import {Spacer} from "../utils";
import {Row} from "../row";

export interface AppBarProps extends JSX.HTMLAttributes<HTMLDivElement> {
    navIcon?: () => JSXElement
    title: any
    actions?: any
}

const AppBarContainer = styled(Row)`
  width : 100%;
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

export function AppBar(props: AppBarProps) {
    return (
        <AppBarContainer {...splitProps(props, ["navIcon", "title", "actions", "children"])[1]}>
            {props.navIcon ? (
                <AppBarNavIcon style={{ "margin-right" : "1rem" }}>
                    {props.navIcon()}
                </AppBarNavIcon>
            ) : (
                <Spacer width={"0.75em"} />
            )}
            <AppBarTitle>{props.title}</AppBarTitle>
            <div>
                {props.actions}
            </div>
        </AppBarContainer>
    )
}