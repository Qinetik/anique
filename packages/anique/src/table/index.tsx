import {styled} from "@qinetik/emotion";
import {Anique} from "../theme";

export const Table = styled("table")`

    border-collapse: collapse;
    font-family: sans-serif;
    min-width: 400px;
    border-radius : ${Anique.border.mdRadius};
    overflow : hidden;

    & thead tr {
        background-color: ${Anique.colors.primary};
        text-align: left;
    }

    & th, & td {
        padding: 12px 15px;
    }

    & tbody tr {
        border-bottom: 1px solid ${Anique.colors.bg100};
    }

    & tbody tr:nth-of-type(even) {
        background-color: ${Anique.colors.bg200};
    }

    & tbody tr:last-of-type {
        border-bottom: 2px solid ${Anique.colors.primary};
    }

    & tbody tr.active {
        font-weight: bold;
        color: ${Anique.colors.primary};
    }
    
`