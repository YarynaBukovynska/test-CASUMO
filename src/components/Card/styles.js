import { useStyle } from 'styled-hooks';
import { colors } from '../../constants/colors';

export const useCardStyles = () => useStyle`
  height: 184px;
  width: 100%;
  margin: 12px 0;
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  & > div {
    display: flex;
    justify-content: space-between;    
  }
  &.mastercard {
    background: ${colors.purple60};
    .top-box_title,
    .bottom-box_data {
      color: ${colors.grey50};
    }    
  }
  &.visa {
    background: ${colors.green30};
    .top-box_title,
    .bottom-box_data {
      color: ${colors.grey70};
    }    
  }
  .top-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      text-align: right;
    }
    &_title {
      font-size: 10px;      
      font-weight: bold;
    }
    &_data {
      font-size: 16px;      
      font-weight: bold;
      color:  ${colors.white};
    }
  }
  .bottom-box {
    align-items: flex-end;
    &_title {
      font-size: 16px;
      font-weight: bold;
      color:  ${colors.white};
      margin-bottom: 8px;
    }
    &_data {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .background-box {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.2;
    border-radius: 16px;
    overflow: hidden;
  }
  &.read-only {
    pointer-events: none;
    cursor: default;
  }
`;

export default useCardStyles;
