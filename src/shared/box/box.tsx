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

type SsBoxProps = LayoutProps & ColorProps & TypographyProps & SpaceProps;

const SsBox = styled.div<SsBoxProps>`
  box-sizing: border-box;
  ${compose(layout, color, typography, space)}
`;

export default SsBox;
