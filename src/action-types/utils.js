import NAMESPACE from '../config/namespace';

export const getC2ActionType = (feature, type) => `${NAMESPACE}/${feature}/${type}`;
