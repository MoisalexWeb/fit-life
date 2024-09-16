import Title from "../../Title/Title"
import Button from "../../Button/Button"
import { banner, circleOne, circleTwo, coach, fitness } from "./importImages"
import "./About.css"


const About = () => {
    return (
        <section className="container" id='about'>
            <div className="about__container">

                <figure className="about__figure">
                    <img src={circleOne} alt=" " aria-hidden="true" className="about-circle about-circle--one" />
                    <img src={circleTwo} alt=" " aria-hidden="true" className="about-circle about-circle--two" />
                    <img src={banner} alt="Woman training" className="about-banner" />
                    <img src={fitness} alt=" " aria-hidden="true" className="about-fitness" />
                </figure>

                <div className="about__texts">
                    <Title
                        title="welcome to our fitness gym"
                        subtitle="about us"
                    />

                    <p className="about-description about-description--first">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                    <p className="about-description about-description--last">Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.</p>

                    <div className="about__card">
                        <img src={coach} alt="Denis Robinson picture" className="about__card-avatar" />
                        <div className="about__card__texts">
                            <h3 className="about__card__texts-coach">Denis Robinson</h3>
                            <p className="about__card__texts-description">our coach</p>
                        </div>
                        <Button
                            text='explore more'
                            href='#'
                            orange={true}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About