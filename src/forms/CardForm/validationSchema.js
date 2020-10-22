import * as Yup from 'yup';

const cardFormSchema = ({ getMessage }) => Yup.object().shape({
  name: Yup.string().trim()
    .required(getMessage('validation.card.name.isRequired'))
    .max(20, getMessage('validation.card.name.maxLength')),
  number: Yup.string().trim()
    .matches(/^[\d\s]+$/, { message: getMessage('validation.card.number') })
    .length(19, getMessage('validation.card.number'))
    .required(getMessage('validation.card.number.isRequired')),
  expiryDate: Yup.string().trim()
    .matches(/^[01]?[0-9]\/[2-9][0-9]$/, { message: getMessage('validation.card.expiryDate') })
    .required(getMessage('validation.card.expiryDate.isRequired')),
  securityCode: Yup.string().trim()
    .length(3, getMessage('validation.card.securityCode'))
    .matches(/^\d+$/, { message: getMessage('validation.card.securityCode') })
    .required(getMessage('validation.card.securityCode.isRequired')),
});

export default cardFormSchema;
