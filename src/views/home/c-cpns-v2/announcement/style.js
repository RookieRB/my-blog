import styled from'styled-components';


const AnnouncementWrapper = styled.div`
  padding: var(--card-padding);
  box-shadow: var(--card-box-shadow);
  border-radius: var(--card-border-radius);
  &:hover{
    box-shadow: var(--card-hover-box-shadow);
  }
  .announcement-title{
    display: flex;
    align-items: center;
    h3{
      margin-left: 10px;
      font-size: 1.1rem;
      font-weight: 400;
    }
  }
  .announcement-content{
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--font-color);
  }
`

export default AnnouncementWrapper;