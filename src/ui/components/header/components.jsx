import { styled } from 'styled-components';

export const HeaderBox = styled.header`
    width: 100%;
    position: relative;
`;

export const HeaderContent = styled.div`
    max-width: 1180px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MobileMenuConteiner = styled.div`
    width: 100%;
    position: relative;
`;

export const HeaderMobileTopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #FFFFFF;
    padding: 0 16px;
`;

export const HeaderMobilMenu = styled.nav`
    width: 32px;
`;

export const MobileMenuList = styled.ul`
    list-style: none;
    padding: 16px 0;
    background-color: #FFFFFF;
`;

export const MobileMenuItem = styled.li``;

export const Logo = styled.h2`
    font-weight: 700;
    font-size: 32px;
    color: #2A90D9;
`;

export const IconUser = styled.img`
    width: 32px;
    height: 32px;
`;

export const BurgerMenu = styled.span`
    display: block;
    width: 32px;
    height: 2px;
    background-color: #333;
    position: relative;

    &::before, &::after {
        content: '';
        display: block;
        width: 32px;
        height: 2px;
        background-color: #333;
        position: absolute;
    }

    &::before {
        top: -10px;
    }

    &::after {
        bottom: -10px;
    }
`;

export const HeaderMenu = () => (
    <nav>
        <ul>
            <li>Last Minute Deals</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Contacts</li>
        </ul>
    </nav>
);

export const HeaderLogo = () => (
    <h2>Your<span>.logo</span></h2>
);

export const HeaderNav = () => (
    <nav className="header__menu">
        <ul className="menu">
            <li className="menu__item">Last Minute Deals</li>
            <li className="menu__item">Blog</li>
            <li className="menu__item">About us</li>
            <li className="menu__item">Contacts</li>
        </ul>
    </nav>
);

export const HeaderUserInterface = () => (
    <div className="header__user-interface">
        <div className="user-interface user-interface--langth">$</div>
        <div className="user-interface user-interface--coin">ENG</div>
        <IconUser src={new URL('../../img/header_user_icon.png', import.meta.url).href} alt="User icon" />
    </div>
);
