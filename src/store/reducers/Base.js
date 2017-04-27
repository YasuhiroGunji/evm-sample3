import * as CONST from '../../const/Base';

const initialState = {
  ShowSideMenu: true,
  PageTitle: '申請一覧',
  ShowGroupDialog: false,
  GroupIds: [],
};

export default function Base(state = initialState, action = {}) {
  switch (action.type) {
    case CONST.SHOW_SIDEMENU:
      return { ...state, ShowSideMenu: !state.ShowSideMenu };

    case CONST.PAGE_TRANSITION:
      return { ...state, PageTitle: action.PageTitle };

    case CONST.SHOW_GROUP_DIALOG:
      return { ...state, ShowGroupDialog: action.ShowGroupDialog };

    case CONST.SELECT_GROUP:
      return { ...state, GroupIds: action.groupIds };

    default:
      return state;
  }
}
