import * as CONST from './BaseConst';

export const ShowSideMenu = () =>
  (dispatch) => {
    dispatch({
      type: CONST.SHOW_SIDEMENU,
    });
  };

export const PageTransition = pageTitle =>
  (dispatch) => {
    dispatch({
      type: CONST.PAGE_TRANSITION,
      PageTitle: pageTitle,
    });
  };

export const ShowGroupDialog = isOpen =>
  (dispatch) => {
    dispatch({
      type: CONST.SHOW_GROUP_DIALOG,
      ShowGroupDialog: isOpen,
    });
  };

export const GroupSubmit = groupIds =>
  (dispatch) => {
    dispatch({
      type: CONST.SELECT_GROUP,
      groupIds,
    });
  };
