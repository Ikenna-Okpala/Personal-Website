import styled from "styled-components"
import { DOMINANT_COLOR, TEXT_COLOR } from "../../values/colors"
import { BaseButton } from "../button/button.style"

/**
 * colum-gap: separate columns
 */

export const ProjectDetailsContainer = styled.div`
    width:fit-content;
    height:fit-content;

    margin-left:20px;

    display:flex;
    justify-content:center;
    row-gap:30px;

    img{
        width:300px;
        height:350px;
        object-fit:cover;
        border-radius:10px;
    }
    
`

export const ProjectDetailsTextContainer = styled.div`

    display:flex;
    flex-direction:column;
    width:fit-content;
    height:fit-content;
    margin-left:100px;
    justify-content:center;
    row-gap:20px;

`
export const ProjectSkillsContainer = styled.div`
    width:fit-content;
    height:fit-content;
    display:flex;
    justify-content:center;
    column-gap:20px;
`

export const ProjectSkillsBubble = styled.div`
    width:fit-content;
    height:50px;
    background-color: ${DOMINANT_COLOR};
    border-radius:50px;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:20px;
    padding-right:20px;

`

export const ProjectDescriptionText = styled.p`

    color:${TEXT_COLOR};
    width:600px;
    height:fit-content;
    line-height:1.6;
    font-size:20px;
`

export const ProjectButton = styled(BaseButton)`
    svg{
        fill:white;
    }

`



