import styled from "styled-components";

export const H2 = styled.h2`
    margin: 0;
    color: ${props => props.cor || "#000"};
    padding: 30px;
    font-size: ${props => props.tamanho || "18pt"};
    text-align: ${props => props.alinhamento || "left"};
`