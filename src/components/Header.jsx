import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Hi, I'm David Ogbeide</h1>
            <img id="david-ogbeide" src="images/davidogbeide_suit.jpg" alt="david ogbeide" />
            <h4 className="header-title header-subtitle">
                <span className="ltgt">&lt;</span>
                <span className="subtitle-text">I WRITE STUFF THAT WORKS</span>
                <span className="ltgt">/&gt;</span>
            </h4>
        </div>
    )
}

export default Header
