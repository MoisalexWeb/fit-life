import "./Header.css"
import Nav from "../../Nav/Nav"

import { heroBanner, iconHeart, iconCalories, circleOne, circleTwo } from "./importImages"


const Header = () => {
    return (
        <header className="header" id="home">
            <Nav />

            <div className="header__container">
                <div className="header__texts">
                    <p className="header__texts-legend">
                        <span className="bg">the best</span> <span>fitness club</span>
                    </p>
                    <h1 className="header__texts-title">work hard to get better life</h1>
                    <p className="header__texts-description">Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.</p>
                    <a href="#" className="header__texts-cta">get started</a>
                </div>

                <figure className="header__image">
                    <img src={heroBanner} alt="Man using dumbell" className="header__image-img" />
                </figure>

                <img src={iconCalories} alt=" " aria-hidden="true" className="header__card-icon header__card-icon--calories" />

                <img src={iconHeart} alt=" " aria-hidden="true" className="header__card-icon header__card-icon--heart" />

                <img src={circleOne} alt=" " aria-hidden="true" className="header-circle header-circle--one" />
                <img src={circleTwo} alt=" " aria-hidden="true" className="header-circle header-circle--two" />
            </div>
        </header>
    )
}

export default Header