import styled from "styled-components";


const ListWrapper = styled.div`

    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 22px;
    padding: 0 25px;
    margin-top: 25px;
    

    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .top{
        display: flex;
        font-size: 18px;
        border-bottom: 1px solid #ddd;
        padding: 15px 0;
        .title{

        }
        .change{
            flex: 1;
            text-align:end;
        }
    }
    .contetn{
        flex: 1;
        border-bottom: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        .item{
            width: 248px;
            word-break:break-all;
            overflow:hidden;
            flex: 1;
            padding: 15px 0;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .footer{
        padding: 10px 10px;
        text-align: center;
        font-size: 20px;
    }
`

export default ListWrapper