import { useEffect, useState } from 'react'

const useNavOnScroll = () => {

    const [fadeInMenu, setFadeInMenu] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    
    useEffect(() => {
        const showHideMenu = () => {
            setScrollPosition(window.scrollY)

            if (window.scrollY >= 50) setFadeInMenu(true)
            else setFadeInMenu(false)
        }

        window.addEventListener('scroll', showHideMenu)

        return () => {
            window.removeEventListener('scroll', showHideMenu)
        }
    }, [scrollPosition])

    return {
        fadeInMenu
    }
}

export default useNavOnScroll