import React from "react";
import Box from "../../shared/box/box";
import Text from "../../shared/text/text";

function About() {
    return (
        <>
            <Box bg={"info"} p={4} mx={2} my={2}>
                <Text
                    textAlign="center"
                    color={"blacks.0"}
                    fontSize={[0, 1, 2, 3]}
                    lineHeight={1}
                >
                    This is an info box, with responsive typography that changes based on
                    the view port.
                </Text>
            </Box>

            <Box bg={"success"} p={4} mx={2} my={2}>
                <Text
                    textAlign="center"
                    color={"blacks.0"}
                    fontSize={[0, 1, 2, 3]}
                    lineHeight={1}
                >
                    This is a success box, with responsive typography that changes based on
                    the view port.
                </Text>
            </Box>

            <Box bg={"warning"} p={4} mx={2} my={2}>
                <Text
                    textAlign="center"
                    color={"blacks.0"}
                    fontSize={[0, 1, 2, 3]}
                    lineHeight={1}
                >
                    This is a warning box, with responsive typography that changes based on
                    the view port.
                </Text>
            </Box>
        </>
    );
}

export default About;
