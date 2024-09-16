import "./Classes.css"
import Title from "../../Title/Title"
import CardClass from "../../CardClass/CardClass"
import { weightLifting, weightLiftingIcon, cardioStrength, cardioStrengthIcon, yoga, yogaIcon, fitnessPack, fitnessPackIcon } from "./importImages"
import useSwiperConfig from "./useSwiperConfig"


const Classes = () => {

    const { slidesPerView } = useSwiperConfig()

    return (
        <section className="classes" id="classes">
            <div className="container">
                <Title
                    title='fitness classes for every goal'
                    subtitle='our classes'
                    center={true}
                    light={true}
                />
                <swiper-container
                    slides-per-view={slidesPerView}
                    space-between="20"
                >
                    <swiper-slide>
                        <CardClass
                            bannerImg={weightLifting}
                            title='weight lifting'
                            icon={weightLiftingIcon}
                            description='Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.'
                            percent={85}
                        />
                    </swiper-slide>

                    <swiper-slide>
                        <CardClass
                            bannerImg={cardioStrength}
                            title='cardio & strength'
                            icon={cardioStrengthIcon}
                            description='Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.'
                            percent={70}
                        />
                    </swiper-slide>

                    <swiper-slide>
                        <CardClass
                            bannerImg={yoga}
                            title='power yoga'
                            icon={yogaIcon}
                            description='Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.'
                            percent={90}
                        />
                    </swiper-slide>

                    <swiper-slide>
                        <CardClass
                            bannerImg={fitnessPack}
                            title='fitness pack'
                            icon={fitnessPackIcon}
                            description='Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.'
                            percent={90}
                        />
                    </swiper-slide>

                </swiper-container>
            </div>
        </section >
    )
}

export default Classes