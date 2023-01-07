import logo from '../../logo.svg'
import styled from "styled-components"

const Logo = styled.div`display: flex;align-items:center;justify-content:center;margin-right: 20px;`
const LogoImage = styled.img`max-width: 20vh;`

function HeaderLogo(){
    return(
        <Logo>
            <LogoImage src={logo} alt='Logo do react' />
            <p><strong>Alura</strong>Books</p>
        </Logo>
    )
}

export default HeaderLogo