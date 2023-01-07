import styled from "styled-components";

const Menu = styled.ul`display:flex;`
const MenuLista = styled.li`list-style-type: none; max-width:128px; min-height:100%; margin-right:15px; cursor:pointer;`
const itens = ['CATEGORIAS','FAVORITOS','MINHA LISTA']

function HeaderMenu(){
    return(
        <Menu>
            {itens.map(iten => (
                <MenuLista>{iten}</MenuLista>
            ))}
        </Menu>
    )
}

export default HeaderMenu