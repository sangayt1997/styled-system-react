import styled from 'styled-components'
import { space, color, layout, ColorProps, SpaceProps, LayoutProps, typography, TypographyProps } from 'styled-system'

const Box = styled.div<ColorProps & SpaceProps & LayoutProps & TypographyProps>(
    typography,
    space,
    color,
    layout
)

export default Box;
