import React from 'react'
import { IonIcon } from '@ionic/react'
import {
    logoInstagram,
    logoFacebook,
    logoTiktok
} from 'ionicons/icons'
import "../CSS/Navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbarcontent">
                    <div className="navbarText">
                        <div className="svgLogo">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_180_100)">
                                    <path d="M16.25 40L12.1578 29.0922L1.25 25L12.1578 20.9078L16.25 10L20.3422 20.9078L31.25 25L20.3422 29.0922L16.25 40ZM6.875 13.75L5.03359 8.71641L0 6.875L5.03359 5.03359L6.875 0L8.71641 5.03359L13.75 6.875L8.71641 8.71641L6.875 13.75ZM31.25 20L28.8195 13.6805L22.5 11.25L28.8195 8.81953L31.25 2.5L33.6805 8.81953L40 11.25L33.6805 13.6805L31.25 20Z" fill="#FCEFEC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_180_100">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1>Garin</h1>
                    </div>
                    <div className="navbarLinks">
                        <div className="SocialLinks">
                            <IonIcon icon={logoTiktok} />
                            <IonIcon icon={logoInstagram} />
                            <IonIcon icon={logoFacebook} />
                        </div>
                        <a href="https://www.instagram.com/ok.easywork/" id="Contactus">Contact us</a>
                        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3H23M2 14H23M2 25H23" stroke="#FCEFEC" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar