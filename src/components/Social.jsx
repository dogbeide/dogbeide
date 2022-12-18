import React from 'react'
import './Social.css'

const Social = () => {
    return (
        <div className="social-links">
            <a className="social-icon fa fa-envelope"
                href="mailto:boyowao@gmail.com"
                target="_blank"
            ></a>
            
            <a className="social-icon fa fa-whatsapp"
                href="https://wa.me/16043791635"
                target="_blank"
            ></a>
            <a className="social-icon fa fa-linkedin-square "
                href="https://www.linkedin.com/in/david-ogbeide-037528a5/"
                target="_blank"
            ></a>
            <a className="social-icon fa fa-telegram"
                href="https://t.me/naturesdelightmagic"
                target="_blank"
            ></a>
        </div>
    )
}

export default Social