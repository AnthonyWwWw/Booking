export default function Header(){
    return(
        <header className="header">
            <div className="header__content container"> {/* Видаляємо __ перед container */}
                <h2 className="header__logo">Your<span>.logo</span></h2>
                <nav className="header__menu">
                    <ul className="menu">
                        <li className="menu__item">Last Minute Deals</li>
                        <li className="menu__item">Blog</li>
                        <li className="menu__item">About us</li>
                        <li className="menu__item">Contacts</li>
                    </ul>
                </nav>
                <div className="header__user-interface"> 
                    <div className="user-interface user-interface--langth">$</div> 
                    <div className="user-interface user-interface--coin">ENG</div>
                    <img className="user-interface--icon" src={new URL('../../img/header_user_icon.png', import.meta.url).href} alt="" />
                </div>
            </div>
        </header>
    
)}