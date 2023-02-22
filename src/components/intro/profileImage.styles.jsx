
import styled from "styled-components";
import { DOMINANT_COLOR } from "../../values/colors";

/**
 * with flex, you have to specify the wif=dth
 * object-fit: fit an image into its container maintaining aspect ration or clipping
 * specify width and height for img dimension before calling object fit
 */

export const ProfileImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius: 100px;
    
`

export const ProfileImageContainer = styled.div`
    display:flex;
    background-color:${DOMINANT_COLOR};
    border-radius: 100px;
    margin-top: 70px;
    justify-content:center;
    align-items:flex-end;
    width:400px;
    height:400px;
    margin-right: 150px;

`

