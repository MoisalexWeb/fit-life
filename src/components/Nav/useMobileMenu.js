import { useEffect, useState } from "react"

const useMobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    const openMenu = () => setActiveMenu(true)

    const closeMenu = () => setActiveMenu(false)

    useEffect(() => {
        const hideMenu = () => {
            if (!activeMenu) return

            if (window.innerWidth >= 880) setActiveMenu(false)
        }

        window.addEventListener('resize', hideMenu)

        return () => {
            window.removeEventListener('resize', hideMenu)
        }

    })


    return {
        activeMenu,
        openMenu,
        closeMenu
    }
}

export default useMobileMenu