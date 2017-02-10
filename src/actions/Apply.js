import API from './Api';

export const ACTION_INIT = 'INIT';
export const ACTION_SUBMIT = 'SUBMIT';

export const init = (enpId) => {
  return (dispatch) => {
    
    API("Apply/GetOvertimeList/42015")
    .then(
      (obj) => {
        console.debug(obj);

        dispatch({
          type: ACTION_INIT,
          applyList: obj.OvertimeList
        });
      }
    ).catch(
      (err) => { console.error(err); }
    );
  };
}

export const submit = (applyForm) => {

  API("Apply/GetOvertimeList/42015")

  return (dispatch) => {
    dispatch({
      type: ACTION_SUBMIT,
      applyForm: applyForm
    });
  };

};