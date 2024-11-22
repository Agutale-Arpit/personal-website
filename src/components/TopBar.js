import React from "react";

function TopBar() {
    const topBarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "#fff",
    };

    const navStyle = {
        display: "flex",
        gap: "1.5rem",
    };

    return (
        <header style={topBarStyle}>
            <h1>Arpit Agutale</h1>
            <nav style={navStyle}>
                <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
                <a href="#Experience" style={{ color: "#fff", textDecoration: "none" }}>#Experience</a>
                <a href="#Projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a>
                <a href="#Education" style={{ color: "#fff", textDecoration: "none" }}>Education</a>
            </nav>
        </header>
    );
}

export default TopBar;
