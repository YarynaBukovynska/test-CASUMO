import NAMESPACE from '../config/namespace';
import { NON_BREAKING_SPACE } from '../constants/index';
import enUsMessages from '../messages/en-US';

export function partialStateReducer(initialState, handlers) {
  return (state = initialState, action = {}) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    const newState = handler(state, action);
    if (newState === state) {
      return state;
    }

    return { ...state, ...newState };
  };
}

export const generateMessage = (intl, key, values) => (
  intl
    ? (
      intl.formatMessage(
        {
          id: key,
          defaultMessage: key,
        },
        values,
      )
    )
    : key
);

export const addNameSpace = (string) => {
  const isNameSpace = (string.split('.')[0] === NAMESPACE);
  return (isNameSpace ? string : `${NAMESPACE}.${string}`);
};

const userLocaleMessages = Object.entries(enUsMessages).reduce((acc, [key, value]) => {
  acc[`${NAMESPACE}.${key}`] = value;
  return acc;
}, {});

export const getUserLocale = () => {
  const locale = 'en';
  const messages = { ...userLocaleMessages };
  return { locale, messages };
};

export const generateDataForUpdateCards = (data, item) => {
  const foundIndex = data.findIndex(x => x.id === item.id);
  data[foundIndex] = item;
  return data;
};

const splitAt = x => {
  const newData = x.replace(/\s/g, '');
  return [newData.slice(0, 4), newData.slice(4, 8), newData.slice(8, 12), newData.slice(12, 16)];
};

export const generateCardNumberForView = data => {
  return splitAt(data).join(NON_BREAKING_SPACE);
};
