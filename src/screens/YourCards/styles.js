import { useStyle } from 'styled-hooks';
import { colors } from '../../constants/colors';

export const useYourCardsStyles = () => useStyle`
  background-color: ${colors.background};
  height: 100vh;
  width: 420px;
  margin: 0 auto;
  padding: 40px 24px;
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  position: relative;
  .header {
    flex-basis: 100px;
    h3 {
      margin: 0;
      font-size: 30px;
      color: ${colors.purple60};
    }
    span {
      font-size: 14px;
      color: ${colors.grey50};
      font-weight: 600;
    }    
  }
  .cards-list {
    flex-basis: calc(100vh - 150px);
    overflow: auto;
  }
  .footer {    
    flex-basis: 50px;
    margin-top: 40px;
    button {
      background-color: ${colors.purple60};
      color: white;
      font-size: 14px;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 24px;
      font-weight: 600;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  } 
`;
