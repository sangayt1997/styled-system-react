import { Link } from "react-router-dom";
import React from "react";
import "./home.scss";

function Home() {
    return (
        <div className="home">
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Home;
