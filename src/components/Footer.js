import React from 'react';

const footerStyle = {
    'color': '#99341e',
    'textAlign': 'center',
    'fontFamily': 'monospace',
    'fontSize': 'xx-small'
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            Handsewn by Sush &amp; Vibe. 2017
            <a href="https://github.com/vaibhawj/por-febour-client" target="_blank"
                rel="noopener noreferrer">
                <img src="img/github.png" className="tabIcon" alt="photos" />
            </a>
        </div>
    )
}

export default Footer;            
