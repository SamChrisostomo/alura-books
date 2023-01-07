import styled from "styled-components";
import HeaderLogo from "../HeaderLogo";
import HeaderMenu from "../HeaderMenu";

const HeaderContainer = styled.header`
color:#282c34;
background-color:#FFF8EA;
max-height: 20vh;
min-width: 100vh;
display: flex;
align-items:center;
justify-content:center;`

function Header(){
    return (
        <HeaderContainer>
            <HeaderLogo/>
            <HeaderMenu/>
        </HeaderContainer>
    )
}

export default Header