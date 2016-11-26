export const ACTION_SUBMIT = 'SUBMIT';

export const submit = (applyForm) => {

  return (dispatch) => {

    dispatch({
      type: ACTION_SUBMIT,
      applyForm: applyForm
    });
    
  };

};