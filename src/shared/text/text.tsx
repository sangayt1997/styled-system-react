import styled from "styled-components";
import { typography, color, TypographyProps, ColorStyleProps } from "styled-system";

const SsText = styled.p<TypographyProps & ColorStyleProps>`
  ${typography};
  ${color}
`;

export default SsText;
