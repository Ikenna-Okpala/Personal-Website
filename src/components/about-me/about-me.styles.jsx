import styled from "styled-components";
import { TEXT_COLOR } from "../../values/colors";
/**
 * justify:y
 * align-items:x
 * paragraph has indentation by default
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

    h3{
        color:${TEXT_COLOR};
        margin-top:0px;
        font-weight:400;
        
    }

    h1{
        font-size:40px;
    }
    
`

export const AboutMeDetailsContainer = styled.div`
    width:100%;
    height:100%;

    margin-top:50px;
    display:flex;
    justify-content:flex-start;

    p{
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

export const AboutMeTextContainer = styled.div`

    width:100%;
    height:100%;

    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    margin-left:100px;
    p{
        line-height:1.6;
        font-size:20px;
        margin-left: 0px;
    }
    a{
        text-decoration:none;
    }

   
`