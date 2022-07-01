import React from "react";
import { SsCard } from "../../shared/card/card";
import SsBox from "../../shared/box/box";

function Variant() {
    return (
        <SsBox p={"md"}>
            <SsCard color="white" fontSize="md" borderRadius={10} mb={"md"}>
                Hello there
            </SsCard>

            <SsCard appearance="secondary" color="white" fontSize="md" borderRadius={10} mb={"md"}>
                Hello there
            </SsCard>

            <SsCard appearance={["secondary", "primary"]} color="white" fontSize="md" borderRadius={4}>
                Hello there
            </SsCard>
        </SsBox>
    );
}

export default Variant;
