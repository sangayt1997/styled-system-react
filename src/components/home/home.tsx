import { Link } from "react-router-dom";
import React from "react";
import "./home.scss";
import SsText from "../../shared/text/text";

function Home() {
    const routes = [
        {
            route: "/font-responsive",
            label: "Font Responsive"
        },
        {
            route: "/variant",
            label: "Variant"
        },
        {
            route: "/layout",
            label: "Layout"
        },
    ]
    return (
        <div className="home">
            <h1 className="home__heading">Welcome to Styled System with react</h1>
            <SsText color="white" fontSize="xl">Click below to see the demo of styled system</SsText>
            <nav className="home__nav">
                {
                    routes.map(
                        routes =>
                            <Link to={routes.route} className="home__nav-link">{routes.label}</Link>
                    )
                }

            </nav>
        </div>
    );
}

export default Home;
