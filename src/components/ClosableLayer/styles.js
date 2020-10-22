import { useStyle } from 'styled-hooks';
import { colors } from '../../constants/colors';

export const useClosableLayerStyles = () => useStyle`
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.grey90};
    opacity: 0.5;
  }
  .container {
    background: ${colors.white};
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 24px;
    .close-icon {
      text-align: right;
      cursor: pointer;
    }
  }  
`;
