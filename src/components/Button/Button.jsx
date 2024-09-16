import "./Button.css"

const Button = ({ text, href, orange }) => {
    return (
        <a href={href} className={`button-component ${orange ? 'button-component--orange' : '' }`}>{text}</a>
    )
}

export default Button