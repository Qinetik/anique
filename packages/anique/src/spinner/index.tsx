import {keyframes, styled, useTheme} from "@qinetik/emotion";
import {BrandColors, OnBgColors, ResultColors} from "../theme/Colors";
import {Anique} from "../theme/Theme";

export interface SpinnerProps {
    class?: string
    color?: keyof OnBgColors | keyof ResultColors | keyof BrandColors
}

const SpinnerAnimation = keyframes`
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
    return (
        <div style={{width: "32px", height: "32px"}}>
            <SpinnerAnimation />
            <AniqueStyledSpinner
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-icon="spinner"
                width={'32'}
                height={'32'}
                fill={Anique.colors[props.color || "onBg"]}
            >
                <path
                    d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"/>
            </AniqueStyledSpinner>
        </div>
    );
};
