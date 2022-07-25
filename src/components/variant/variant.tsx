import React from "react";
import { SsCard } from "../../shared/card/card";
import SsBox from "../../shared/box/box";
import SsButton from "../../shared/button/button";

function Variant() {
    return (
        <SsBox p={16}>
            <SsCard
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                fontSize="md"
                borderRadius={10}
                mb={16}
            >
                Hello there
            </SsCard>

            <SsCard display="flex"
                    justifyContent="center"
                    alignItems="center"
                    appearance="secondary"
                    color="white"
                    fontSize="md"
                    borderRadius={10}
                    mb={16}
            >
                Hello there
            </SsCard>

            <SsCard display="flex"
                    justifyContent="center"
                    alignItems="center"
                    appearance={["secondary", "primary"]}
                    color="white"
                    fontSize="md"
                    borderRadius={4}
            >
                Hello there
            </SsCard>

            <SsButton variant="secondary" mr={16}>Styled System Button!</SsButton>
            <SsButton mt={16} size="large">
                Styled System Button!
            </SsButton>
        </SsBox>
    );
}

export default Variant;
