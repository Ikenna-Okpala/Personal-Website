import styled from "styled-components"
import { DOMINANT_COLOR } from "../../values/colors"

/**
 * box-sizing: border-box - child fits parent dimension with with extra padding and margins included
 * box-sizing: border-box - child fits parent dimension without extra padding and margins included
 * display:flex flexible container depending on its kids
 */

export const NavigationContainer = styled.div`
    box-sizing: border-box;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-top:30px;
    margin-left:150px;
    margin-right:350px;

`

export const NameSpan = styled.span`
    font-weight: bold;
    font-size: 20px;

`
/**
 * em --> relative to parent
 * rem --> relative to default font size (16)
 */

export const NavigationMenuContainer = styled.div`
    display:flex;
    height: 1em;
    justify-content:flex-start;

`

export const NavigationMenu = styled.span`
   font-size:18px;
   font-weight:500;
   margin-left:50px;
   :hover{
    color:${DOMINANT_COLOR};
    transition:0.2s;
    cursor:pointer;
   }


`
/**
 * position:relative relative to left right dimensions
 * position:static is relative to nothing
 */

export const NavigationColorModeIcon = styled(NavigationMenu)`
    margin-bottom:100px;

    :hover{
        &:last-child{
            fill: ${DOMINANT_COLOR};
        }
    }
`
/**
 * &: unique selection
 * block level and inline lemenets
 * fill to change color of icons
 */


