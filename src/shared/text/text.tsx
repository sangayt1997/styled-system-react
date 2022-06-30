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

type SsTextProps = LayoutProps & ColorProps & TypographyProps & SpaceProps;

const SsText = styled.p<SsTextProps>`
  ${compose(typography, layout, space, color)}
`;

export default SsText;
