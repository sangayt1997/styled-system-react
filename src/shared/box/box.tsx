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
    compose
} from 'styled-system'
import { AppTheme } from "../../theme/theme";

type SsBoxProps = LayoutProps<AppTheme> & ColorProps<AppTheme> & TypographyProps<AppTheme> & SpaceProps<AppTheme>;

const SsBox = styled.div<SsBoxProps>`
  box-sizing: border-box;
  ${compose(layout, color, typography, space)}
`;

export default SsBox;
