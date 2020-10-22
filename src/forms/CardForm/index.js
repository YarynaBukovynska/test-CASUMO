import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormStyles } from '../styles';
import cardFormSchema from './validationSchema';
import { SuccessIcon, ErrorIcon } from '../../icons';
import { colors } from '../../constants/colors';
import { useMessages } from '../../hooks';

const CardForm = ({
  card, onSubmit, submitLabel,
}) => {
  const getMessage = useMessages();
  const className = useFormStyles();
  return (
    <Formik
      initialValues={card}
      validationSchema={cardFormSchema({ getMessage })}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {(
        {
          values,
          handleSubmit,
          dirty,
          touched,
          errors,
          handleChange,
          handleBlur,
          isSubmitting,
        }
      ) => {
        return (
          <Form className={className}>
            <div>
              <label htmlFor='name'>{getMessage('card.form.name')}</label>
              <Field
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder={getMessage('card.form.name.placeholder')}
                className={
                  errors.name && touched.name
                    ? 'error-field'
                    : !touched.name ? '' : 'success-field'
                }
              />
              {errors.name && touched.name && (<ErrorIcon color={colors.red30} />)}
              {!errors.name && touched.name && (<SuccessIcon color={colors.green30} />)}
              <ErrorMessage name='name' component='div' className='error-box' />
            </div>
            <div>
              <label htmlFor='number'>{getMessage('card.form.number')}</label>
              <Field
                type='text'
                name='number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                placeholder={getMessage('card.form.number.placeholder')}
                className={
                  errors.number && touched.number
                    ? 'error-field'
                    : !touched.number ? '' : 'success-field'
                }
              />
              {errors.number && touched.number &&  (<ErrorIcon color={colors.red30} />)}
              {!errors.number && touched.number && (<SuccessIcon color={colors.green30} />)}
              <ErrorMessage name='number' component='div' className='error-box' />
            </div>
            <div>
              <label htmlFor='expiryDate'>{getMessage('card.form.expiryDate')}</label>
              <Field
                type='text'
                name='expiryDate'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expiryDate}
                placeholder={getMessage('card.form.expiryDate.placeholder')}
                className={
                  errors.expiryDate && touched.expiryDate
                    ? 'error-field'
                    : !touched.expiryDate ? '' : 'success-field'}
              />
              {errors.expiryDate && touched.expiryDate &&  (<ErrorIcon color={colors.red30} />)}
              {!errors.expiryDate && touched.expiryDate &&  (<SuccessIcon color={colors.green30} />)}
              <ErrorMessage name='expiryDate' component='div' className='error-box' />
            </div>
            <div>
              <label htmlFor='securityCode'>{getMessage('card.form.securityCode')}</label>
              <Field
                type='text'
                name='securityCode'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.securityCode}
                placeholder={getMessage('card.form.securityCode.placeholder')}
                className={
                  errors.securityCode && touched.securityCode
                    ? 'error-field'
                    : !touched.securityCode ? '' : 'success-field'}
              />
              {errors.securityCode && touched.securityCode &&  (<ErrorIcon color={colors.red30} />)}
              {!errors.securityCode && touched.securityCode &&  (<SuccessIcon color={colors.green30} />)}
              <ErrorMessage name='securityCode' component='div' className='error-box' />
            </div>
            <button type="submit" disabled={isSubmitting || !dirty} onClick={handleSubmit}>
              {submitLabel}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

CardForm.propTypes = {
  card: PropTypes.object,
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string,
};

CardForm.defaultProps = {
  card: {},
  onSubmit: () => {},
  submitLabel: '',
};

export default CardForm;
