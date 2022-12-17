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
            <h4 className="header-desc">
                <div className="header-desc-item">I am a Canadian raised UK born Web Developer with a basis in engineering, computer science, and media art design.</div>
                <div className="header-desc-item">I can build a digital platform for your idea, your business, project, organization, personal page, etc.</div>
                <div className="header-desc-item">My goal is to create digital art that's functional and paints an interactive picture of what you are presenting!~</div>
            </h4>
        </div>
    )
}

export default Header
