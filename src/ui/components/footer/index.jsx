export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__info">
                    <div className="footer__info-columns">
                        <h4 className="footer__info-title">Title of section</h4>
                        <ul className="footer__info-list">
                            <li className="footer__info-item"><a href="">Page title</a></li>
                            <li className="footer__info-item"><a href="">Page title</a></li>
                            <li className="footer__info-item"><a href="">Page title</a></li>
                        </ul>
                    </div>
                    <div className="footer__info-columns">
                        <h4 className="footer__info-title">Title of section</h4>
                        <ul className="footer__info-list">
                        <   li className="footer__info-item"><a href="">Page title</a></li>
                            <li className="footer__info-item"><a href="">Page title</a></li>
                            <li className="footer__info-item"><a href="">Page title</a></li>
                        </ul>
                    </div>
                    <div className="footer__info-columns">
                        <h4 className="footer__info-title">Title of section</h4>
                        <ul className="footer__info-list">
                            <li className="footer__info-item"><a href="">Page title</a></li>
                            <li className="footer__info-item"><a href="">Page title</a></li>
                            <li className="footer__info-item"><a href="">Page title</a></li>
                        </ul>
                    </div>
                    <div className="footer__newsletter">
                        <h4 className="footer__newsletter-title">Subscribe to Newsletter</h4>
                        <form action="submit">
                            <label className="footer__label-input-email" htmlFor="email">Your email</label> 
                            <div className="footer__input-wrapper">
                                <input className="footer__input-email" type="email" id="email" /> 
                                <button className="footer__button-send-email" type="submit"></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer__social">
                    <h2 className="footer__logo">Your<span>.logo</span></h2>
                    <p className="footer__social-tatel">Design by<a href="">Delvig</a></p>
                    <ul className="footer__social-list">
                        <a className="footer__link-social" href="#"><img src={new URL("../../img/Combined-Shape.svg", import.meta.url).href} alt="" /></a>
                        <a className="footer__link-social" href="#"><img src={new URL("../../img/icon_facebook.svg", import.meta.url)} alt="" /></a>
                        <a className="footer__link-social" href="#"><img src={new URL("../../img/icon_youtube.svg", import.meta.url)} alt="" /></a>
                        <a className="footer__link-social" href="#"><img src={new URL("../../img/icon_instagram.svg", import.meta.url)} alt="" /></a>
                        <a className="footer__link-social" href="#"><img src={new URL("../../img/icon_telegram.svg", import.meta.url)} alt="" /></a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}