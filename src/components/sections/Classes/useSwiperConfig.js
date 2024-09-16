import { useEffect, useState } from "react";

const useSwiperConfig = () => {
    const [slidesPerView, setSlidesPerView] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) setSlidesPerView(1)

            else if (window.innerWidth >= 800 && window.innerWidth < 1200) setSlidesPerView(2)

            else if (window.innerWidth >= 1200) setSlidesPerView(3)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return {
        slidesPerView
    }
}


export default useSwiperConfig