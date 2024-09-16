import './CardClass.css'

const CardClass = ({ bannerImg, icon, title, description, percent }) => {
    return (
        <div className='card__class'>
            <figure className="card__class__figure">
                <img src={bannerImg} alt={title} className="card__class__figure-img" />
            </figure>

            <div className="card__class__text">
                <div className="card__class__main">
                    <img src={icon} alt=' ' className="card__class__main-icon" />
                    <h3 className="card__class__main-title">{title}</h3>
                </div>

                <p className="card__class-description">{description}</p>

                <div className="card__class__progress">
                    <span className="card__class__progress-text">class full</span>
                    <span className="card__class__progress-num">{percent}%</span>
                </div>

                <progress className="card__class-progressbar" max='100' value={percent}></progress>
            </div>
        </div>
    )
}

export default CardClass