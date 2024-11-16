import React from "react";

function BlogsAndProjects() {
    const sectionStyle = {
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
        backgroundColor: "#eaeaea",
    };

    const sectionItemStyle = {
        width: "45%",
    };

    return (
        <section id="blogs-and-projects" style={sectionStyle}>
            <div id="blogs" style={sectionItemStyle}>
                <h2>My Blogs</h2>
                <ul>
                    <li>Blog 1: <a href="#">Coming Soon</a></li>
                    <li>Blog 2: <a href="#">Coming Soon</a></li>
                </ul>
            </div>
            <div id="projects" style={sectionItemStyle}>
                <h2>My Projects</h2>
                <ul>
                    <li>Project 1: <a href="#">Coming Soon</a></li>
                    <li>Project 2: <a href="#">Coming Soon</a></li>
                </ul>
            </div>
        </section>
    );
}

export default BlogsAndProjects;
