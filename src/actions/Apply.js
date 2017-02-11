import * as API from './Api';

export const ACTION_INIT = 'INIT';
export const ACTION_SUBMIT = 'SUBMIT';
export const ACTION_SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';

export const init = (enpId) => {
  return (dispatch) => {
    
    API.Get("Apply/GetOvertimeList/42015")
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
  return (dispatch) => {
    dispatch({
      type: ACTION_SUBMIT,
      applyForm: applyForm
    });

    // API.Post("Apply/CreateOcertimeRequest")
    // .then(
    //   (obj) => {
    //     console.debug(obj);
        
    //   }
    // ).catch(
    //   (err) => { console.error(err); }
    // );

    setTimeout(() => {

      dispatch({
        type: ACTION_SUBMIT_SUCCESS,
        snackbarOpen: true
      });

    }, 1000);
  };
};