import { useState, useEffect } from 'react'

const useShowScrollBtn = () => {
    const [ showBtn, setShowBtn ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300 ) setShowBtn(true)
            else setShowBtn(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    })

    return {
        showBtn
    }
}

export default useShowScrollBtn