import * as baseConst from '../const/Base';

export const ShowMenu = (isOpen) => {
  return (dispatch) => {
    dispatch({
      type: baseConst.SHOW_MENU,
      showMenu: isOpen,
    });
  };
};

export const GroupSelect = (groupIds) => {
  return (dispatch) => {
    dispatch({
      type: baseConst.SELECT_GROUP,
      showMenu: groupIds,
    });
  };
};
