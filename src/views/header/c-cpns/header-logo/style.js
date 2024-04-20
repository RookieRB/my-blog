import styled from "styled-components"


const LogoWrapper = styled.div` 
    display: flex;
    padding: 10px;
    flex: 0 0 auto;
    cursor: pointer;
    .text{
        color: ${props => props.theme.font.color};
        font-size: ${props => props.theme.font.fontSize};
        text-align: center;
    }
    img{
        width:100fr;
        border-radius: 7px;
    }
`

export default LogoWrapper