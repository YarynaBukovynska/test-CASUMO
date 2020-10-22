import { getC2ActionType } from './utils';

const feature = 'CARDS';

export const LOAD_CARDS = getC2ActionType(feature, 'LOAD');
export const SAVE_CARD = getC2ActionType(feature, 'SAVE');
export const SET_CARD = getC2ActionType(feature, 'SET');
export const UPDATE_CARD = getC2ActionType(feature, 'UPDATE');
export const SET_CURRENT_CARD = getC2ActionType(feature, 'SET_CURRENT');
export const CLEAR_CURRENT_CARD = getC2ActionType(feature, 'CLEAR_CURRENT');
export const SET_SHOW_WORKFLOW = getC2ActionType(feature, 'SET_SHOW_WORKFLOW');
export const INIT_YOUR_CARDS_PAGE = getC2ActionType(feature, 'INIT_PAGE');
