import styled from "styled-components"
import { DOMINANT_COLOR } from "../../values/colors"

/**
 * 
 * with: auto browser calculates the width
 * aslign-item: centralizes item vertically
 * !important overides all previous stylish rules
 * animation-diuration: determines animation time
 * tansition: determine animation speed
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
    width:200px;
    display:flex;
    transition: 0.5s;

    svg{
        fill: white;
    }
    :hover{
        transform: scale(1.1)
    }

    
`