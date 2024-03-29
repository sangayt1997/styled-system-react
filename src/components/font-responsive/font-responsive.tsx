import React from "react";
import SsBox from "../../shared/box/box";
import SsText from "../../shared/text/text";

function FontResponsive() {
    return (
        <>
            <SsBox bg="primary200" p={20} m={20}>
                <SsText
                    textAlign="center"
                    color="white"
                    fontSize={["xs", "md", "xl"]}
                    lineHeight="lg"
                >
                    This is an info box, with responsive typography that changes based on
                    the view port.
                </SsText>
            </SsBox>

            <SsBox bg="success200"  p={20} m={20}>
                <SsText
                    textAlign="center"
                    color="white"
                    fontSize={["xs", "md", "xl"]}
                    lineHeight="lg"
                >
                    This is a success box, with responsive typography that changes based on
                    the view port.
                </SsText>
            </SsBox>

            <SsBox bg="warning100" p={20} m={20}>
                <SsText
                    textAlign="center"
                    color="danger200"
                    fontSize={["xs", "md", "xl"]}
                    lineHeight="lg"
                >
                    This is a warning box, with responsive typography that changes based on
                    the view port.
                </SsText>
            </SsBox>
        </>
    );
}

export default FontResponsive;
