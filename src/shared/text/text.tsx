import styled from "styled-components";
import {
    typography,
    color,
    TypographyProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    layout,
    space, compose
} from "styled-system";
import { AppTheme } from "../../theme/theme";

type SsTextProps = LayoutProps<AppTheme> & ColorProps<AppTheme> & TypographyProps<AppTheme> & SpaceProps<AppTheme>;

const SsText = styled.p<SsTextProps>`
  ${compose(typography, layout, space, color)}
`;

export default SsText;
