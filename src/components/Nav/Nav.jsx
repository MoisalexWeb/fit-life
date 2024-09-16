import './Nav.css'
import Button from '../Button/Button'
import logo from '/images/favicon.svg'
import useMobileMenu from './useMobileMenu'
import useNavOnScroll from './useNavOnScroll'

const Nav = () => {

    const { activeMenu, openMenu, closeMenu } = useMobileMenu()
    const { fadeInMenu } = useNavOnScroll()

    return (
        <nav className={`nav ${fadeInMenu ? 'fadein-nav' : ''}`}>
            <div className="nav__container">

                <a href="#home" className="nav__logo">
                    <img src={logo} alt="Logo" className="nav__logo-img" />
                    Fitlife
                </a>

                <div className={`nav__menu ${(activeMenu) ? "show-menu" : ""}`}>
                    <ul className="nav__menu__links">
                        <li>
                            <a href="#home" className="nav__menu__links-link" onClick={closeMenu}>home</a>
                        </li>
                        <li>
                            <a href="#about" className="nav__menu__links-link" onClick={closeMenu}>about us</a>
                        </li>
                        <li>
                            <a href="#classes" className="nav__menu__links-link" onClick={closeMenu}>classes</a>
                        </li>
                        <li>
                            <a href="#blog" className="nav__menu__links-link" onClick={closeMenu}>blog</a>
                        </li>
                        <li>
                            <a href="#contact" className="nav__menu__links-link" onClick={closeMenu}>contact us</a>
                        </li>
                    </ul>

                    <button className="nav__menu-close" aria-label='Close mobile menu' onClick={closeMenu}>
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                {/* <a href="#" className="nav-contact">join now</a> */}
                <Button
                    text='join now'
                    href='#'
                />

                <button aria-label='Open mobile menu' className="nav-open-menu" onClick={openMenu}>
                    <i className="ri-menu-3-line"></i>
                </button>

            </div>
        </nav>
    )
}

export default Nav