import styled from "styled-components";


const CardWrapper = styled.div`
    flex:1;
    display: flex;    
    height: 425px;
    width: 300px;
    flex-direction: column;
    box-shadow: 0 0 6px rgba(0,0,0,0.18);   
    border-radius: 22px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .cardImg{
        border-radius:22px 22px 0 0 ;
        position: relative;
        overflow: hidden;
        height:200px;
        img{
            width: 100%;
            position: absolute;
            top: 0;
        }
    }
    
    .pageDesc{
        flex:1;
        white-space:normal; 
        word-break:break-all;
        overflow:hidden;
    }
    .basicInfo{
        display: flex; 
        font-size: 16px;
        line-height: 22px;
        color: #8a919f;
        padding-bottom: 15px;
        .username{
            padding: 0 10px;
        }
        .look{
            padding-right: 10px;
        }
        .good{
            padding-right: 10px;    
        }
        .collection{
            padding-right: 10px;
        }
        .howFar{

        }
        .pageData{
            flex: 1;
            text-align: end;
            padding-right: 15px;
        }
    }
`

export default CardWrapper