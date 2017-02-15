import * as API from './Api';

export const ACTION_INIT = 'INIT';
export const ACTION_FORM = 'FORM';
export const ACTION_SUBMIT = 'SUBMIT';
export const ACTION_SNACKBAR = 'SNACKBAR';

export const Init = (enpId) => {
  return (dispatch) => {
    API.Get('Apply/GetOvertimeList/42015')
    .then(
      (obj) => {
        console.debug(obj);

        dispatch({
          type: ACTION_INIT,
          applyList: obj.OvertimeList,
        });
      },
    ).catch(
      err => console.error(err),
    );
  };
};

export const ShowForm = (isOpen) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_FORM,
      showForm: isOpen,
    });
  };
};

export const Submit = (applyForm) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_SUBMIT,
      applyForm,
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
        type: ACTION_SNACKBAR,
        snackbarOpen: true,
      });
    }, 2000);
  };
};

export const Snackbar =
  isOpen =>
    dispatch =>
      dispatch({
        type: ACTION_SNACKBAR,
        snackbarOpen: isOpen,
      });

