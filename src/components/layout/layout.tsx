import React from "react";
import "./layout.scss";
import SsBox from "../../shared/box/box";
import SsText from "../../shared/text/text";

function Layout() {
    return (
        <SsBox p={[8, 12, 16]}>
            <SsBox display="flex" justifyContent="space-between" alignItems="center" mb={16} backgroundColor={"primary100"} >
                <SsBox width={1} height={"200px"} bg={"primary100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 100%
                    </SsText>
                </SsBox>
            </SsBox>
            <SsBox display="flex" justifyContent="space-between" alignItems="center" mb={16}>
                <SsBox width={1 / 2} height={"200px"} bg={"primary100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 50%
                    </SsText>
                </SsBox>
                <SsBox width={1 / 2} height={"200px"} bg={"success100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 50%
                    </SsText>
                </SsBox>
            </SsBox>
            <SsBox display="flex" justifyContent="space-between" alignItems="center" mb={16}>
                <SsBox width={1 / 3} height={"200px"} bg={"primary100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 33.33%
                    </SsText>
                </SsBox>
                <SsBox width={1 / 3} height={"200px"} bg={"success100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 33.33%
                    </SsText>
                </SsBox>
                <SsBox width={1 / 3} height={"200px"} bg={"warning100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 33.33%
                    </SsText>
                </SsBox>
            </SsBox>
            <SsBox display="flex" justifyContent="space-between" alignItems="center" mb={16}>
                <SsBox width={1 / 4} height={"200px"} bg={"primary100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 25%
                    </SsText>
                </SsBox>
                <SsBox width={1 / 4} height={"200px"} bg={"success100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 25%
                    </SsText>
                </SsBox>
                <SsBox width={1 / 4} height={"200px"} bg={"warning100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 25%
                    </SsText>
                </SsBox>
                <SsBox width={1 / 4} height={"200px"} bg={"danger100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width 25%
                    </SsText>
                </SsBox>
            </SsBox>

            {/*Responsive layout*/}
            <SsBox width={[
                1,    // 100% below the smallest breakpoint (less than 599px)
                1 / 2, // 50% from the next breakpoint and up (min-width: 599px and max-width: 958px)
                1 / 3, // 33.33% from the next breakpoint and up (min-width: 959px and max-width: 1278px)
                1 / 4   // 25% from the next breakpoint and up ( greater than and equal to 1279px)
            ]}
                   height={"200px"}
                   bg={"primary100"}
                   mb={16}
            >
                <SsText
                    textAlign="center"
                    color="black"
                    fontSize={["xs", "md", "xl"]}
                    lineHeight="lg"
                >
                    Responsive
                </SsText>
            </SsBox>

            <SsBox display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-between"
                   alignItems="center" mb={16}>
                <SsBox width={[
                    1,    // 100% below the smallest breakpoint
                    1,  // 100% from the next breakpoint and up
                    1 / 3   // 33.33% from the next breakpoint and up
                ]} height={"200px"} bg={"success100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width Responsive and layout
                    </SsText>
                </SsBox>
                <SsBox width={[
                    1,    // 100% below the smallest breakpoint
                    1,  // 100% from the next breakpoint and up
                    1 / 3   // 33.33% from the next breakpoint and up
                ]} height={"200px"} bg={"warning100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width Responsive and layout
                    </SsText>
                </SsBox>
                <SsBox width={[
                    1,    // 100% below the smallest breakpoint
                    1,  // 100% from the next breakpoint and up
                    1 / 3   // 33.33% from the next breakpoint and up
                ]} height={"200px"} bg={"danger100"}>
                    <SsText
                        textAlign="center"
                        color="black"
                        fontSize={["xs", "md", "xl"]}
                        lineHeight="lg"
                    >
                        width Responsive and layout
                    </SsText>
                </SsBox>
            </SsBox>
        </SsBox>
    );
}

export default Layout;
