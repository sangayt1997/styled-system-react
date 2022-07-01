import React from "react";
import {
    variant,
    ResponsiveValue,
    LayoutProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    compose,
    layout, color, typography, space, borderRadius, BorderProps
} from "styled-system";
import { AppTheme } from "../../theme/theme";
import styled from "styled-components";

type BoxVariants = "primary" | "secondary";

type BoxOptions = {
    appearance?: ResponsiveValue<BoxVariants>;
};

type BoxProps = LayoutProps &
    ColorProps<AppTheme> &
    TypographyProps<AppTheme> &
    SpaceProps<AppTheme> &
    BorderProps<AppTheme> &
    BoxOptions;

export const SsCard = styled.div<BoxProps>`
  box-sizing: border-box;

  ${variant({
    prop: "appearance",
    variants: {
      primary: {
        bg: "primary100",
        p: "md",
        size: "200px"
      },
      secondary: {
        bg: "success200",
        p: "lg",
        size: "300px"
      },
    },
  })} 
    
/*This is done so that our styled props can override the variant styles*/ 
  ${compose(layout, color, typography, space, borderRadius)}
`;

SsCard.defaultProps = {
    appearance: "primary",
};
