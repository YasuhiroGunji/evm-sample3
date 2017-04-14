import * as CONST from '../../const/Base';

const initialState = {
  ShowMenu: true,
  pageTitle: '申請一覧',
  isAttendance: false,
  isApply: true,
  showGroupDialog: false,
  GroupIds: [],
};

export default function Base(state = initialState, action = {}) {
  switch (action.type) {
    case CONST.SHOW_MENU:
      return { ...state, ShowMenu: action.showMenu };
    case CONST.SELECT_GROUP:
      return { ...state, GroupIds: action.groupIds };

    default:
      return state;
  }
}
