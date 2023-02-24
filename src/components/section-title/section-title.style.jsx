import styled from "styled-components"
import { TEXT_COLOR } from "../../values/colors"

export const TitleContainer = styled.div`
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