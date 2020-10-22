import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMessages } from '../../hooks';
import {
  saveCard,
  clearCurrentCard,
  setShowWorkflow,
  initYourCardsPage,
} from '../../action-creators/cards';
import {
  selectCurrentCard,
  selectIsCurrentCard,
  selectIsShowWorkflow,
} from '../../selectors/cards';

export const useYourCardsData = () => {
  const getMessage = useMessages();
  const dispatch = useDispatch();
  const currentCard = useSelector(selectCurrentCard);
  const isEdit = useSelector(selectIsCurrentCard);
  const isShowWorkflow = useSelector(selectIsShowWorkflow);
  const openWorkflow = useCallback(() => dispatch(setShowWorkflow(true)), [dispatch]);
  const onClose = useCallback(() => {
    dispatch(setShowWorkflow(false));
    if(isEdit) {
      dispatch(clearCurrentCard());
    }
    }, [dispatch, isEdit]
  );
  const onSubmit = useCallback((data) => {
    dispatch(saveCard(data));
    dispatch(setShowWorkflow(false));
    if(isEdit) {
      dispatch(clearCurrentCard());
    }
  }, [dispatch, isEdit]);

  useEffect(() => {
    dispatch(initYourCardsPage());
  }, [dispatch]
);

  return {
    openWorkflow,
    isShowWorkflow,
    onClose,
    getMessage,
    onSubmit,
    isEdit,
    currentCard,
  };
};
