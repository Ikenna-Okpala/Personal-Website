import styled from "styled-components";
import { TEXT_COLOR } from "../../values/colors";
/**
 * justify:y
 * align-items:x
 */

export const AboutMeContainer = styled.div`

    width:auto;
    height: 500px;

    margin-left: 200px;
    margin-right:300px;
    margin-top:100px;

    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    align-items:center;
    
`

export const AboutMeDetailsContainer = styled.div`
    width:100%;
    height:100%;

    margin-top:50px;
    display:flex;
    justify-content:flex-start;

    h3{
        margin-left: 150px;
        color:${TEXT_COLOR};
    }
`

export const ProfileImageBlurred = styled.img`
    width:300px;
    height:350px;
    border-radius:20px;
    object-fit:cover;
`