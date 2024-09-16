import './Title.css'

const Title = ({ title, subtitle, center, light }) => {
    return (
        <>
            <p className={`section-subtitle ${center ? 'center' : ''}`}>{subtitle}</p>
            <h2 className={`section-title ${center ? 'center' : ''} ${light ? 'light' : ''}`}>{title}</h2>
        </>
    )
}

export default Title