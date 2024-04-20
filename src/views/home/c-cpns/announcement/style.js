import styled from "styled-components";


const AncWrapper = styled.div`

    height: 400px;
    border: 2px solid #ddd; 
    border-radius: 22px;


    cursor: pointer;
    transition: box-shadow 200ms;
    &:hover{
        box-shadow: 0 0 8px rgba(0,0,0,.18);
    }
    .top{
        display: flex;
        font-size: 22px;
        vertical-align:center;
        padding: 20px 20px;
        text-align: center;
        border-bottom: 1px solid #ddd; 
        .title{

        }
        .right{
            flex:1;
            text-align: end;
        }
    }
`

export default AncWrapper