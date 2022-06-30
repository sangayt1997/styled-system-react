import styled from "styled-components";
import { typography, color, TypographyProps, ColorStyleProps } from "styled-system";

const Text = styled.p<TypographyProps & ColorStyleProps>`
  ${typography};
  ${color}
`;

export default Text;
