import "./ScrollToTop.css"
import useShowScrollBtn from "./useShowScrollBtn"

const ScrollToTop = () => {
    const { showBtn } = useShowScrollBtn()

    return (
        <a href="#home" className={`scroll-top ${showBtn ? "show-scroll-btn" : ""}`}>
            <i className="ri-arrow-up-double-fill"></i>
        </a>
    )
}

export default ScrollToTop