import * as CONST from '../const/Base';

export const ShowMenu = isOpen =>
  (dispatch) => {
    dispatch({
      type: CONST.SHOW_MENU,
      showMenu: isOpen,
    });
  };


export const GroupSelect = groupIds =>
  (dispatch) => {
    dispatch({
      type: CONST.SELECT_GROUP,
      groupIds,
    });
  };

