import { colors } from '../constants/colors';
import {useStyle} from "styled-hooks";

export const useFormStyles = () => useStyle`
  padding-top: 20px;
  > div {
    margin-bottom: 32px;
    position: relative;
    svg {
      position: absolute;
      right: 0;
      top: 23px;
    }
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${colors.grey20};
    padding: 8px 20px 8px 0;
    box-sizing: border-box;
    &: focus {
      outline: none;
    }
    &.error-field {
     border-bottom: 1px solid ${colors.red30};
    }
    &.success-field {
     border-bottom: 1px solid ${colors.green30};
    }
  }
  .error-box {
    color: ${colors.red30};
    font-size: 14px;
    font-weight: 600;
  }  
  label {
    font-size: 14px;
    font-weight: 600;    
  }
  button[type='submit'] {
    background-color: ${colors.purple60};
    color: white;
    font-size: 14px;
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    margin: 40px 0;
    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: ${colors.grey20};
      cursor: default;
      pointer-events: none;
    }
  }  
  input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${colors.grey20};
  }
  input::-moz-placeholder { /* Firefox 19+ */
    color: ${colors.grey20};
  }
  input:-ms-input-placeholder { /* IE 10+ */
    color: ${colors.grey20};
  }
  input:-moz-placeholder { /* Firefox 18- */
    color: ${colors.grey20};
  }  
`;
