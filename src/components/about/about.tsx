import React from "react";
import SsBox from "../../shared/box/box";
import SsText from "../../shared/text/text";

function About() {
    return (
        <>
            <SsBox bg={"info"} p={4} mx={2} my={2}>
                <SsText
                    textAlign="center"
                    color={"blacks.0"}
                    fontSize={[0, 1, 2, 3]}
                    lineHeight={1}
                >
                    This is an info box, with responsive typography that changes based on
                    the view port.
                </SsText>
            </SsBox>

            <SsBox bg={"success"} p={4} mx={2} my={2}>
                <SsText
                    textAlign="center"
                    color={"blacks.0"}
                    fontSize={[0, 1, 2, 3]}
                    lineHeight={1}
                >
                    This is a success box, with responsive typography that changes based on
                    the view port.
                </SsText>
            </SsBox>

            <SsBox bg={"warning"} p={4} mx={2} my={2}>
                <SsText
                    textAlign="center"
                    color={"blacks.0"}
                    fontSize={[0, 1, 2, 3]}
                    lineHeight={1}
                >
                    This is a warning box, with responsive typography that changes based on
                    the view port.
                </SsText>
            </SsBox>
        </>
    );
}

export default About;
