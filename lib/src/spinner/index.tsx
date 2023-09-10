import {styled, useTheme} from "@qinetik/emotion";
import {BrandColors, OnBgColors, ResultColors} from "../theme/Colors";

export interface SpinnerProps {
    class?: string
    color?: keyof OnBgColors | keyof ResultColors | keyof BrandColors
}

const AniqueStyledSpinner = styled("svg")`
    animation: spin 1s linear infinite;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Spinner = (props: SpinnerProps) => {
    const theme = useTheme()
    return (
        <div style={{width: "32px", height: "32px"}}>
            <AniqueStyledSpinner
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-icon="spinner"
                width={'32'}
                height={'32'}
                fill={theme.colors[props.color || "onBg"]}
            >
                <path
                    d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"/>
            </AniqueStyledSpinner>
        </div>
    );
};
