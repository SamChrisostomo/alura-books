import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosLivros"

const PesquisaContainer = styled.section`
    width: 100%;
    color: #FFF8EA;
    max-height: 380px;
    text-align: center;
`
const Titulo = styled.h1`
    font-size: 20pt;
    width: 100%;
    text-align: center;
    margin-bottom:0;
`
const Subtitulo = styled.h3`
    font-size: 14pt;
    font-weight: 500;
`
const ResultadoContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`
const Resultado = styled.div`
    color: #000;
    padding: 10px;
    font-size: 12pt;
    border-radius: 20px;
    margin:10px 20px 30px 0px;
    background-color: #FFF8EA;
`

function Pesquisa(){
    const [livrosPesquisados, setLivroPesquisado] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante!</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura" onBlur={(e) => {
                //Guarda valor digitado no Input
                const livroDigitado = e.target.value
                if(livroDigitado){
                    //Guuarda resultado da pesquisa realizada no arquivo dadosLivros.js
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(livroDigitado))
                    //Atualiza a função state
                    setLivroPesquisado(resultadoPesquisa)
                }else{
                    setLivroPesquisado([])
                }
            }}/>
            <ResultadoContainer>
                {livrosPesquisados.map(livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt={livro.nome} />
                    </Resultado>
                ))}
            </ResultadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa