import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Copyright © DAVID OGBEIDE <span id="footer-year">{year}</span><br/>
            All Rights Reserved
        </div>
    )
}

export default Footer
