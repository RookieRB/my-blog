import styled from "styled-components";


const PageWrapper = styled.div`
    flex: 0 0 auto;
    display: flex;
    line-height: 50px; 
    .item{
        font-size: 1.1em;
        padding: 0 40px;
        cursor: pointer;
        &:hover{
            border-bottom: 1px solid blue;
        }
    }
`


export default PageWrapper