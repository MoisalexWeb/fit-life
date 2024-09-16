import "./BlogNews.css"

const BlogNews = ({ img, date, dateStamp, title, text, link }) => {
    return (
        <article className="blogNews">
            <figure className="blogNews__figure">
                <img src={img} alt={title} className="blogNews__figure-img" />
                <time dateTime={dateStamp} className="blogNews__figure-time">{date}</time>
            </figure>

            <div className="blogNews__texts">
                <h3 className="blogNews__texts-title">{title}</h3>
                <p className="blogNews__texts-description">{text}</p>
                <a href={link} className="blogNews__texts-cta">read more</a>
            </div>
        </article>
    )
}

export default BlogNews