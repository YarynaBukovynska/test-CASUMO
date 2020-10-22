import uniqueId from 'lodash/uniqueId';

export const fetchCards = () => [
  {
    id: uniqueId(),
    name: 'Jon Dou',
    number: '5270057105527487',
    expiryDate: '12/21',
    securityCode: '678',
    type: 'mastercard',
  },
  {
    id: uniqueId(),
    name: 'Who Knows',
    number: '4539730703304208',
    expiryDate: '05/22',
    securityCode: '321',
    type: 'visa',
  }
];
