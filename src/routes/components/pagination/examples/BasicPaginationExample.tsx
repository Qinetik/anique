import {Pagination} from "@qinetik/anique/pagination";

export default function BasicPaginationExample() {
    return (
        <Pagination
            total={5}
            current={1}
            linkProps={(pageNumber) => ({
                href: "#" + pageNumber
            })}
        />
    )
}