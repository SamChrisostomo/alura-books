import { livros } from "./dadosLancamentos"
import { H2 } from "../Titulo"
import styled from "styled-components"
import Card from "../Card"
import imagemLivro from "../../imagens/livro2.png"

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
`
const Livro = styled.div`
    width: 100%;
    max-height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #BBE1FA;
`

function UltimosLancamentos(){
    return(
        <Container>
            <H2 cor="#0F4C75" tamanho="24pt" alinhamento="center" >Ultimos Lançamentos</H2>
            <Livro>
                {livros.map(livro => (
                    <img src={livro.src} alt={livro.nome} />
                ))}
            </Livro>
            <Card 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                conteudo="Construindo aplicações com a ferramenta do Google."
                img={imagemLivro}
             />
        </Container>
    )
}

export default UltimosLancamentos