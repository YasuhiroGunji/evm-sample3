import API from './Api';

export const ACTION_SUBMIT = 'SUBMIT';

export const submit = (applyForm) => {

  // API.callApi();

  return (dispatch) => {
    dispatch({
      type: ACTION_SUBMIT,
      applyForm: applyForm
    });
  };

};