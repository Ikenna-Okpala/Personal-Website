import styled from "styled-components"
import { TEXT_COLOR } from "../../values/colors"


/**
 * margin: top right bottom left
 * widht not specified takes the entire width of page
 */

export const IntroContainer = styled.div`
    box-sizing:border-box;
    margin-top:30px;
    margin-left:150px;
    margin-right:250px;
    height: 500px;
    display:flex;
    justify-content:space-between;

`
/**
 * flex-flow: column arranged in column order
 * gap: reduces column space in flex properties
 * specify margin 0 0 0 0  is you want no space between dics
 * 
 */
export const IntroTextContainer = styled.div`
    display:flex;
    flex-flow:column;
`

export const GreetingText = styled.h3`
    color:#BDBDBD;
    font-size:20px;
    margin: 70px 0px 0px 0px;
`

export const NameText = styled.h1`
    font-size: 45px;
`

export const JobTitleContainer = styled.div`
    color:${TEXT_COLOR};
    display:flex;
    flex-flow:column;
    margin: 0 0 0 0;
    font-size:25px;
`

export const StudentTitle = styled.h3`
    margin: 0 0 0 0;
`

export const JobTitle = styled.h3`
    margin: 0 0 0 0;
`