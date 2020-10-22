import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../constants/colors';

export const CardBackgroundIcon = ({ color }) => (
  <svg width="257" height="184" viewBox="0 0 257 184" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M208.202 -14.271L131 101.5L7.93761 160.029C-8.05573 173.918 1.67932 201 23.2356 201H423.764C445.321 201 455.056 173.918 439.062 160.029L238.798 -14.271C230.454 -21.9097 217.242 -21.9097 208.202 -14.271Z"
          fill={color}/>
  </svg>

);

CardBackgroundIcon.propTypes = {
  color: PropTypes.string,
};

CardBackgroundIcon.defaultProps = {
  color: colors.grey90,
};

export default CardBackgroundIcon;