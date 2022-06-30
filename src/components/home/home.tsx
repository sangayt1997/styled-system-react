import { Link } from "react-router-dom";
import React from "react";
import "./home.scss";

function Home() {
    return (
        <div className="home">
            <h1 className="home__heading">Welcome to Styled System with react</h1>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Home;
