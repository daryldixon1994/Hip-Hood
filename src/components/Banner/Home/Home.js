import React from "react";
import "./Home.css";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className="title">
                HIP-HOOD <br />
                <p className="intro">WHERE THE REAL MUSIC WAS BORN</p>
            </h1>
            <div className="home-visit-link-container">
                <div className="home-visit-link">
                    <h2>CLASSIC US HIP-HOP</h2>
                    <p>VISIT NOW</p>
                    <Link to="/hip-hop">
                        <HiExternalLink size={30} className="link" />
                    </Link>
                </div>
                <div className="home-visit-link">
                    <h2>CLASSIC FRENCH HIP-HOP</h2>
                    <p>VISIT NOW</p>
                    <Link to="/hip-hop">
                        <HiExternalLink size={30} className="link" />
                    </Link>
                </div>
                <div className="home-visit-link">
                    <h2>SOUL & RNB</h2>
                    <p>VISIT NOW</p>
                    <Link to="/hip-hop">
                        <HiExternalLink size={30} className="link" />
                    </Link>
                </div>
                <div className="home-visit-link">
                    <h2>DISCO & JAZZY</h2>
                    <p>VISIT NOW</p>
                    <Link to="/hip-hop">
                        <HiExternalLink size={30} className="link" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
