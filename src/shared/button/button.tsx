import styled from 'styled-components'
import {
    borderRadius,
    buttonStyle,
    color,
    ColorProps,
    fontSize,
    FontSizeProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    variant
} from "styled-system";
import { AppTheme } from "../../theme/theme";

interface SsButtonProps {
    variant?: string;
    size?: string;
}

type SsButtonType =
    FontSizeProps<AppTheme> &
    ColorProps<AppTheme> &
    TypographyProps<AppTheme> &
    SpaceProps<AppTheme> &
    LayoutProps<AppTheme>;

const buttonSize = variant({
    prop: "size",
    key: "buttonSizes",
});

const SsButton = styled("button")<SsButtonProps & SsButtonType>(
    {
        appearance: "button",
        border: 0,
        outline: 0,
        cursor: "pointer"
    },
    borderRadius,
    buttonStyle,
    typography,
    buttonSize,
    space,
    fontSize,
    layout,
    color
);

SsButton.defaultProps = {
    variant: "primary",
    size: "medium"
};

export default SsButton;
