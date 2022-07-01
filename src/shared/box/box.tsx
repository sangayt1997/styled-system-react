import styled from 'styled-components'
import {
    space,
    color,
    layout,
    ColorProps,
    SpaceProps,
    LayoutProps,
    typography,
    TypographyProps,
    compose,
    flexbox,
    FlexboxProps
} from 'styled-system'
import { AppTheme } from "../../theme/theme";

type SsBoxProps = LayoutProps<AppTheme> &
    ColorProps<AppTheme> &
    TypographyProps<AppTheme> &
    SpaceProps<AppTheme> &
    FlexboxProps<AppTheme>;

const SsBox = styled.div<SsBoxProps>`
  box-sizing: border-box;
  ${compose(layout, color, typography, space, flexbox)}
`;

export default SsBox;
