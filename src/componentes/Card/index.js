import { H2 } from "../Titulo"
import styled from "styled-components"

const CardContainer = styled.div`
    width: 600px;
    min-height: 200px;
    padding: 30px;
    border-radius: 30px;
    margin:30px 0px 30px 0px;
    border:1px solid #BBE1FA;
    display: flex;
    justify-content: space-between;
    align-itens: flex-start;
`

const CardContent = styled.p`
    width: 100%;
    font-size: 11pt;
    color: #1B262C;
    text-align: justify;
`
const CardImage = styled.img`
    float: right;
    margin-bottom: 20px;
`

const Button = styled.button`
    border: none;
    color: #1B262C;
    float: right;
    cursor: pointer;
    min-width: 120px;
    min-height: 40px;
    border-radius: 10px;
    background-color: #BBE1FA;
`

function Card({titulo, subtitulo, conteudo, img}){
    return(
        <CardContainer>
            <div>
                <H2 tamanho="14pt" >{titulo}</H2>
                <h3>{subtitulo}</h3>
                <CardContent>{conteudo}</CardContent>
            </div>
            <div>
                <CardImage src={img} alt={titulo} />
                <Button>Saiba Mais</Button>
            </div>
        </CardContainer>
    )
}

export default Card