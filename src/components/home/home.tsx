import { Link } from "react-router-dom";
import React from "react";
import "./home.scss";
import SsText from "../../shared/text/text";

function Home() {
    return (
        <div className="home">
            <h1 className="home__heading">Welcome to Styled System with react</h1>
            <SsText color="white" fontSize="xl">Click below to see the demo of styled system</SsText>
            <nav className="home__nav">
                <Link to="/font-responsive">Font Responsive</Link>
                <Link to="/variant">Variant</Link>
            </nav>
        </div>
    );
}

export default Home;
