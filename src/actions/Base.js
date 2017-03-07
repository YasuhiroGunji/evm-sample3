
export const SHOW_MENU = 'SHOW_MENU';

export const ShowMenu =
  isOpen =>
    dispatch =>
      dispatch({
        type: SHOW_MENU,
        showMenu: isOpen,
      });