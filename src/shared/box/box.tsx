import styled from 'styled-components'
import { space, color, layout, ColorProps, SpaceProps, LayoutProps, typography, TypographyProps } from 'styled-system'

type SsBoxProps = LayoutProps & ColorProps & TypographyProps & SpaceProps;

const SsBox = styled.div<SsBoxProps>(
    typography,
    space,
    color,
    layout
)

export default SsBox;
