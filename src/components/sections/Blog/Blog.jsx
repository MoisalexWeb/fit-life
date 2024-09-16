import "./Blog.css"
import BlogNews from "../../BlogNews/BlogNews"
import Title from "../../Title/Title"
import { img1, img2, img3 } from "./importImages"


const Blog = () => {
    return (
        <section className="container" id="blog">
            <Title
                center={true}
                title='latest blog feed'
                subtitle='our news'
            />

            <div className="blog__container">
                <BlogNews
                    img={img1}
                    date='07 July 2022'
                    dateStamp='2022-07-07'
                    title='Going to the gym for the first time'
                    text='Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
                    link='#'
                />

                <BlogNews
                    img={img2}
                    date='07 July 2022'
                    dateStamp='2022-07-07'
                    title='Parturient accumsan cacus pulvinar magna'
                    text='Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
                    link='#'
                />

                <BlogNews
                    img={img3}
                    date='07 May 2022'
                    dateStamp='2022-05-07'
                    title='Risus purus namien parturient accumsan cacus'
                    text='Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.'
                    link='#'
                />
            </div>
        </section>
    )
}

export default Blog