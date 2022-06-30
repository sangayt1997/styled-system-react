import styled from 'styled-components'
import { variant } from "styled-system";

interface SsButtonProps {
    variant?: string;
}

const SsButton = styled('button')<SsButtonProps>(
    {
        appearance: 'none',
        fontFamily: 'inherit',
    },
    variant({
        variants: {
            primary: {
                color: 'white',
                bg: 'primary',
            },
            secondary: {
                color: 'white',
                bg: 'secondary',
            },
        }
    })
)

export default SsButton;
