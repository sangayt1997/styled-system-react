import styled from "styled-components";
import {
  typography,
  color,
  TypographyProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
  layout,
  space
} from "styled-system";

type SsTextProps = LayoutProps & ColorProps & TypographyProps & SpaceProps;

const SsText = styled.p<SsTextProps>`
  ${typography};
  ${layout};
  ${space};
  ${color}
`;

export default SsText;
