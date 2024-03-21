import Logo from './assets/VoyoLogo';
import * as Styled from './Header.styles';

const Header = () => {
    return (
        <Styled.HeaderContainer>
            <Styled.LogoBox>
                <Logo />
            </Styled.LogoBox>
        </Styled.HeaderContainer>
    );
};

export default Header;
