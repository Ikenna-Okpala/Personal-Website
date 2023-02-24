import styled from "styled-components"
import { DOMINANT_COLOR, TEXT_COLOR } from "../../values/colors"

/**
 * inline-block: padding and margins respected aand arranged in column
 * left: horizontal positioning
 */
export const ProjectContainer = styled.div`
    margin-left:200px;
    margin-right:300px;
    width:auto;
    height:500px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;

    margin-top: 200px;

    h3{
        color:${TEXT_COLOR};
        margin-top:-10px;
        font-weight:400;
        
    }

    h1{
        font-size:40px;
    }

`

export const ProjectSlideShowContainer = styled.div`

    width:1300px;
    height:800px;
    margin-top:40px;
    display:flex;
    justify-content:center;
    align-items:center;

    svg{
        fill:${DOMINANT_COLOR};
        :hover{
            cursor:pointer;
        }
    }

   
`

export const DotContainer = styled.div`
    width:fit-content;
    height:fit-content;
    margin-top:40px;

    display:flex;
    column-gap:10px;
`

export const Dot = styled.div`
    width:15px;
    height:15px;

    border-radius:50%;

    :hover{
        cursor:pointer;
    }
`



