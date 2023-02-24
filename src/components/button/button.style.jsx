import styled from "styled-components"
import { DOMINANT_COLOR } from "../../values/colors"

/**
 * 
 * with: auto browser calculates the width
 * aslign-item: centralizes item vertically
 * !important overides all previous stylish rules
 * animation-diuration: determines animation time
 * tansition: determine animation speed
 * width:fit-content - auto size parent to fit child
 */


export const BaseButton = styled.button`
    height:50px;
    font-size:15px;
    background-color:${DOMINANT_COLOR};
    color:white;
    text-transform:uppercase;
    font-weight:bold;
    cursor:pointer;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    border:none;
    border-radius:30px;
    margin-top: 30px;
    width:fit-content;
    display:flex;
    transition: 0.5s;
    padding-left:30px;
    padding-right:30px;

    svg{
        fill: white;
        margin-left:20px;
    }
    :hover{
        transform: scale(1.1)
    }

    
`