import SpecialOffersCard from "../../components/special-offers-card/index";
import Slider from "../../components/slider/index";
import { useSelector } from "react-redux";
import {
    SearchBarContainer,
    SearchBarWrapper,
    SearchBarForm,
    SearchBarBox,
    SearchBarIcon,
    InputBox,
    SearchBarInput,
    SearchBarSubmit,
    SearchBarConteinerWrapper,
} from "./components"

export default function Main() {

    const isMobile = useSelector((state) => state.windowSize);

    return (
        <main className="main">
            <div className="main__content container">
                <img
                    className="main__banner"
                    src={new URL("../../img/main_baner.png", import.meta.url).href}
                    alt="Main Banner"
                />

                {isMobile > 600 ? (
                    <SearchBarContainer>
                        <SearchBarWrapper>
                            <SearchBarForm aria-label="Hotel Search Form">
                                <SearchBarBox>
                                    <SearchBarIcon src={new URL("../../img/icon_place.svg", import.meta.url).href} alt="" />
                                    <InputBox>
                                        <label className="main__search-bar-label" htmlFor="destination">Where</label>
                                        <SearchBarInput
                                            type="text"
                                            id="input-destination"
                                            name="destination"
                                            className="destination"
                                            placeholder="Search Destination"
                                        />
                                    </InputBox>
                                </SearchBarBox>
                                <SearchBarBox>
                                    <SearchBarIcon src={new URL("../../img/icon_calendar.svg", import.meta.url).href} alt="" />
                                    <InputBox>
                                        <label className="main__search-bar-label" htmlFor="data">When</label>
                                        <SearchBarInput
                                            type="text"
                                            id="input-data"
                                            name="date"
                                            className="data"
                                            placeholder="Select Date"
                                        />
                                    </InputBox>
                                </SearchBarBox>
                                <SearchBarSubmit type="button">
                                    <SearchBarIcon className="main__search-bar-submit-buttom-icon-loupe" src={new URL("../../img/icon_loupe.svg", import.meta.url).href} alt="" />
                                </SearchBarSubmit>
                            </SearchBarForm>
                        </SearchBarWrapper>
                    </SearchBarContainer>
                ) : (
                    <SearchBarContainer>
                        <SearchBarWrapper>
                            <SearchBarConteinerWrapper>
                                <SearchBarForm aria-label="Hotel Search Form">
                                    <SearchBarBox>
                                        <SearchBarIcon src={new URL("../../img/icon_place.svg", import.meta.url).href} alt="" />
                                        <InputBox>
                                            <label className="main__search-bar-label" htmlFor="destination">Where</label>
                                            <SearchBarInput
                                                type="text"
                                                id="input-destination"
                                                name="destination"
                                                className="destination"
                                                placeholder="Search Destination"
                                            />
                                        </InputBox>
                                    </SearchBarBox>
                                    <SearchBarSubmit type="button">
                                        <SearchBarIcon className="main__search-bar-submit-buttom-icon-loupe" src={new URL("../../img/icon_loupe.svg", import.meta.url).href} alt="" />
                                    </SearchBarSubmit>
                                </SearchBarForm>
                            </SearchBarConteinerWrapper>
                        </SearchBarWrapper>
                    </SearchBarContainer>

                )}

            </div>

            <section className="section-why-choose-us">
                <div className="section-why-choose-us__content container">
                    <h2 className="section-why-choose-us__taitel">Why Choose Us</h2>
                    <p className="section-why-choose-us__description">The main reason is because our competitors have disgusting sites, but we cant write that here, so the text here will be different</p>
                    <div className="section-why-choose-us__cards-why-choose-us">
                        <div className="cards-why-choose-us__card">
                            <div className="cards-why-choose-us__icon-conteiner"><img src={new URL("../../img/icon_payment.svg", import.meta.url).href} alt="" className="cards-why-choose-us__icon" /></div>
                            <h4 className="cards-why-choose-us__taitel">Payment methods</h4>
                            <p className="cards-why-choose-us__description">We have a lot of them, from cryptocurrencies to barter for potatoes</p>
                        </div>
                        <div className="cards-why-choose-us__card">
                            <div className="cards-why-choose-us__icon-conteiner"><img src={new URL("../../img/icon_search.svg", import.meta.url).href} alt="" className="cards-why-choose-us__icon" /></div>
                            <h4 className="cards-why-choose-us__taitel">Simple search process</h4>
                            <p className="cards-why-choose-us__description">We checked it out, even the kid did it, but it was my moms friends son</p>
                        </div>
                        <div className="cards-why-choose-us__card">
                            <div className="cards-why-choose-us__icon-conteiner"><img src={new URL("../../img/icon_support_card.svg", import.meta.url).href} alt="" className="cards-why-choose-us__icon" /></div>
                            <h4 className="cards-why-choose-us__taitel">24/7 Support</h4>
                            <p className="cards-why-choose-us__description">Is there something you dont understand? Feel free to call us. Phone number in the footer</p>
                        </div>
                        <div className="cards-why-choose-us__card">
                            <div className="cards-why-choose-us__icon-conteiner"><img src={new URL("../../img/icon_nice.svg", import.meta.url).href} alt="" className="cards-why-choose-us__icon" /></div>
                            <h4 className="cards-why-choose-us__taitel">We are nice</h4>
                            <p className="cards-why-choose-us__description">Fantasy is over, there will be something really convincing here</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-special-offers">
                <div className="section-special-offers__content container">
                    <h2 className="section-special-offers__taitel">Special offers</h2>
                    <div className="section-special-offers__cards-conteiner">
                        <SpecialOffersCard />
                    </div>
                </div>
            </section>

            <section className="section-slider">
                <div className="section-slider__content container">
                    <h2 className="section-slider__taitel">Reviews</h2>
                    <div className="section-slider__slider">
                        <Slider />
                    </div>
                </div>
            </section>

        </main>
    )
}