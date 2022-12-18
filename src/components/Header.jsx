import React from 'react';
import './Header.css'


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
            <div className="header-items row">
                <div className="header-item col-lg-4">
                    <div className="header-item-title">
                        WHO I AM
                    </div>
                    <div className="header-item-desc">
                        A Canadian raised UK-born Web Developer with a basis in 
                        engineering, computer science, and media art design.
                    </div>
                </div>
                <div className="header-item col-lg-4">
                    <div className="header-item-title">
                        MY GOAL
                    </div>
                    <div className="header-item-desc">
                        To deliver functional, concise, yet beautiful interactive displays!~
                        <br/> (on time) 
                    </div>
                </div>
                <div className="header-item col-lg-4">
                    <div className="header-item-title">
                        YOUR NEEDS
                    </div>
                    <div className="header-item-desc">
                        A digital platform for your: 
                        idea, app, business, project, organization, practice, etc.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
