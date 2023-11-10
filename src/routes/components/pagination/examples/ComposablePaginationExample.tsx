import {PaginationAnchor, PaginationLinks, PaginationRoot} from "@qinetik/anique/pagination";

export default function ComposablePaginationExample() {
    return (
        <PaginationRoot>
            <PaginationLinks total={5}>
                {pageNumber => (
                    <PaginationAnchor href={"#" + pageNumber}>{pageNumber}</PaginationAnchor>
                )}
            </PaginationLinks>
        </PaginationRoot>
    )
}