import { useIntl } from 'react-intl';
import { addNameSpace } from '../utils';
import { generateMessage } from '../utils';

const  useGetMessage = () => {
  const intl = useIntl();
  return (key, values) => generateMessage(intl, key || 'missing.key', values);
};

const useMessages = () => {
  const getMessage = useGetMessage();
  return (key, params) => getMessage(addNameSpace(key), params);
};

export default useMessages;