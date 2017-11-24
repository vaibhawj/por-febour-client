import React from 'react';

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    fontFamily: "monospace",
    fontSize: "xx-small"
}

const phantom = {
    display: "block",
    padding: "5px",
    height: "15px",
    width: "100%",
}

const Footer = () => {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                Handsewn by Sush &amp; Vibe. 2017
            <a href="https://github.com/vaibhawj/por-febour-client" target="_blank"
                    rel="noopener noreferrer">
                    <img src="img/github.png" className="github-icon" alt="github" />
                </a>
            </div>
        </div>
    )
}

export default Footer;
