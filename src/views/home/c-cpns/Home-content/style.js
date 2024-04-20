import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  
  .contentLeft{
    flex:0 0 875px;
    padding-right:25px;

    img{
        border-radius:25px;
    }
    .pageCard{
      display: flex;
      gap: 20px;
      padding-top: 25px;
    }
  }
  .contentRight{
      flex: 0 0 300px;
  }

`


export default ContentWrapper