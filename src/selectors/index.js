import get from 'lodash/get';

export const fromState = path => state => get(state, path);
