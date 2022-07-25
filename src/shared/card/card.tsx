// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    variant,
    ResponsiveValue,
    LayoutProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    compose,
    layout,
    color,
    typography,
    space,
    borderRadius,
    BorderProps,
    flexbox,
    system, FlexboxProps
} from "styled-system";
import { AppTheme } from "../../theme/theme";
import styled from "styled-components";

type BoxVariants = "primary" | "secondary";

type BoxOptions = {
    appearance?: ResponsiveValue<BoxVariants>;
    marginStart?: SpaceProps<AppTheme>["marginLeft"];
    marginEnd?: SpaceProps<AppTheme>["marginLeft"]
};

type BoxProps = LayoutProps<AppTheme> &
    ColorProps<AppTheme> &
    TypographyProps<AppTheme> &
    SpaceProps<AppTheme> &
    BorderProps<AppTheme> &
    FlexboxProps<AppTheme> &
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
    
    /*
    To extend Styled System for other CSS properties that aren't included in the library,
     use the system utility to create your own style functions.
     */
  
  ${system({
    marginStart: {
      property: "marginInlineStart",
      scale: "space",
    },
    marginEnd: {
      property: "marginInlineEnd",
      scale: "space",
    },
  })}
    
    /*This is done so that our styled props can override the variant styles*/ 
  
  ${compose(layout, color, typography, space, borderRadius, flexbox)}
`;

SsCard.defaultProps = {
    appearance: "primary",
};
