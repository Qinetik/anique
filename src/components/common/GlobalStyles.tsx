import {createGlobalStyle} from "@qinetik/emotion";

export const PageGlobalStyles = createGlobalStyle`

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
    }

    .light .display-in-dark {
        display: none !important;
    }

    .dark .display-in-light {
        display: none !important;
    }
`