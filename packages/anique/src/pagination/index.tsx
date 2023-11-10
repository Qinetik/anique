import {styled} from "@qinetik/emotion";
import {Anique} from "../theme";
import {Accessor, For, JSX, JSXElement} from "solid-js";
import {Row} from "../row";

export interface PaginationProps {
    /**
     * total number of pages
     */
    total: number,
    /**
     * number of items per page, default : 1
     */
    perPage?: number,
    /**
     * current page number starting from 1
     */
    current: number,
    /**
     * props for each page link
     * @param page
     */
    linkProps?: (page: number) => JSX.IntrinsicElements["a"],
}

const PaginationAnchor = styled.a`

    width: 2.75em;
    height: 2.75em;
    background: ${Anique.colors.bg100};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    color: ${Anique.colors.onBg};
    text-decoration: none;

    &:hover, &.current {
        background: ${Anique.colors.bg300};
        color: ${Anique.colors.onBg};
    }

    &.current {
        background: ${Anique.colors.primary};
    }

`

const PaginationRoot = styled(Row)`
    flex-wrap: wrap;
    gap: 0.5em;
`

interface PaginationLinksProps extends Pick<PaginationProps, "total" | "perPage"> {
    children: (item: number, index: Accessor<number>) => JSXElement
}

function PaginationLinks(props: PaginationLinksProps) {
    return (
        <For each={Array.from(Array(Math.ceil(props.total / (props.perPage || 1))).keys(), item => item + 1)}>
            {props.children}
        </For>
    )
}

export function Pagination(props: PaginationProps) {

    if (props.total < 1 || (props.perPage || 1) < 1) return null

    return (
        <PaginationRoot>
            <PaginationLinks perPage={props.perPage} total={props.total}>
                {pageNumber => {
                    const linkProps = props.linkProps ? props.linkProps(pageNumber) : {}
                    return (
                        <PaginationAnchor
                            {...linkProps}
                            class={(linkProps.class ? linkProps.class + " " : "") + (props.current == pageNumber ? "current" : "")}
                        >{pageNumber}</PaginationAnchor>
                    )
                }}
            </PaginationLinks>
        </PaginationRoot>
    )

}