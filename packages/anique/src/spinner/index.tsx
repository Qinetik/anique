import {keyframes, styled} from "@qinetik/emotion";
import {BrandColors, OnBgColors, ResultColors} from "../theme/Colors";
import {Anique} from "../theme/Theme";
import {Size} from "../theme/Size";
import {JSX, splitProps} from "solid-js";

export interface SpinnerProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
    color?: keyof OnBgColors | keyof ResultColors | keyof BrandColors
    size?: Size
}

export const SpinnerAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const AniqueStyledSpinner = styled("svg")`
    animation: ${SpinnerAnimation.animationName} 1s linear infinite;
`;

export const Spinner = (props: SpinnerProps) => {
    const pixelSize = 32 + ((props.size || 0) * 8)
    return (
        <>
            <SpinnerAnimation />
            <AniqueStyledSpinner
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-icon="spinner"
                width={pixelSize}
                height={pixelSize}
                fill={Anique.colors[props.color || "onBg"]}
                {...splitProps(props, ["color", "size"])[1]}
            >
                <path
                    d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"/>
            </AniqueStyledSpinner>
        </>
    );
};
