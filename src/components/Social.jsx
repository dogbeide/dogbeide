import React from 'react'
import './Social.css'

const Social = () => {
    return (
        <div className="social-links">
            <a className="social-icon fa fa-envelope"
                href="mailto:boyowadavid@gmail.com"
                target="_blank"
            ></a>
            
            <a className="social-icon fa fa-whatsapp"
                href="https://wa.me/14374324885"
                target="_blank"
            ></a>
            <a className="social-icon fa fa-linkedin-square "
                href="https://www.linkedin.com/in/boyowa-ogbeide-037528a5/"
                target="_blank"
            ></a>
            <a className="social-icon fa fa-telegram"
                href="https://t.me/iamboyowa"
                target="_blank"
            ></a>
        </div>
    )
}

export default Social