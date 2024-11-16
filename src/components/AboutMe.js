import React from "react";

function AboutMe() {
    const aboutStyle = {
        padding: "2rem",
        backgroundColor: "#f4f4f9",
        textAlign: "center",
    };

    return (
        <section id="about" style={aboutStyle}>
            <h2>About Me</h2>
            <p>
                Hi, I’m Arpit Agutale, an aspiring software engineer. 
                I love learning about web development and creating innovative solutions.
            </p>
        </section>
    );
}

export default AboutMe;
