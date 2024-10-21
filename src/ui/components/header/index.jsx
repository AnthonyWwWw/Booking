import { useSelector, useDispatch } from 'react-redux';
import {
  HeaderMobilMenu,
  MobileMenuList,
  MobileMenuItem,
  Logo,
  IconUser,
  BurgerMenu,
  MobileMenuConteiner,
  HeaderMobileTopBar,
  HeaderBox,
  HeaderContent,
  HeaderUserInterface,
  HeaderLogo,
  HeaderNav,
} from './components';
import { toggleBurgerMenu } from "../../../core/redux/toggleBurgerMenuSlice";

export default function Header() {
    const isMobile = useSelector((state) => state.windowSize);
    const isOpen = useSelector((state) => state.toggleBurgerMenu);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        dispatch(toggleBurgerMenu(!isOpen));
    };

    const expandedHeader = () => ({
        height: isOpen ? '100vh' : '39px',
        transition: 'height 0.5s ease', 
        zIndex: 1,
        backgroundColor: "#FFFFFF",
        position: "absolute",
        width: '100%',
    });

    return (
        <HeaderBox style={expandedHeader()}>
            <HeaderContent>
                {isMobile > 850 ? (
                    <>
                        <HeaderLogo />
                        <HeaderNav />
                        <HeaderUserInterface />
                    </>
                ) : (
                    <MobileMenuConteiner>
                        <HeaderMobileTopBar>
                            <HeaderMobilMenu onClick={toggleMenu}>
                                <BurgerMenu />
                            </HeaderMobilMenu>
                            <Logo>Your<span>.logo</span></Logo>
                            <IconUser src={new URL('../../img/header_user_icon.png', import.meta.url).href} alt="User icon" />
                        </HeaderMobileTopBar>
                        {isOpen && ( 
                            <MobileMenuList>
                                <MobileMenuItem>Last Minute Deals</MobileMenuItem>
                                <MobileMenuItem>Blog</MobileMenuItem>
                                <MobileMenuItem>About us</MobileMenuItem>
                                <MobileMenuItem>Contacts</MobileMenuItem>
                            </MobileMenuList>
                        )}
                    </MobileMenuConteiner>
                )}
            </HeaderContent>
        </HeaderBox>
    );
}
