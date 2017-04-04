import * as baseConst from '../../const/Base';

const initialState = {
  showMenu: true,
  pageTitle: '申請一覧',
  isAttendance: false,
  isApply: true,
  isGroupDialogOpen: false,
  groupIds: [],
};

export default function Base(state = initialState, action = {}) {
  switch (action.type) {
    case baseConst.SHOW_MENU:
      return { ...state, showMenu: action.showMenu };
    case baseConst.SELECT_GROUP:
      return { ...state, groupIds: action.groupIds };

    default:
      return state;
  }
}
