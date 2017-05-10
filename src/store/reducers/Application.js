import * as CONST from '../../const/Application';
import * as Util from '../../actions/Util';

export const ListItemTemplate = {
  ApplicationId: -1,
  ApplicationCd: 1,
  ScheduledDate: Util.GetCurrentTimeString(),
  CustomerCd: '',
  ProjectCd: '',
  OvertimeStart: 1800,
  OvertimeEnd: 2000,
  OvertimeActualStart: 0,
  OvertimeActualEnd: 0,
  NomalOvertimeHrs: 0,
  LateOvertimeHrs: 0,
  IrregularStart: 0,
  IrregularEnd: 0,
  IrregularActualStart: 0,
  IrregularActualEnd: 0,
  IrregularHrs: 0,
  WorkContent: '',
  ShowDetail: false,
};

const initialState = {
  EmpId: 42015,
  ShowForm: true,
  ApplicationList: [],
  ApplicationForm: {
    MonthValue: 201703,
    DayValue: 6,
    ScheduledDate: new Date(),
    CustomerCd: 'IKD',
    ProjectCd: 'KFS5',
    WorkContent: '',
    OvertimeStart: 1800,
    OvertimeEnd: 2000,
    OvertimeActualStart: 0,
    OvertimeActualEnd: 0,
    NomalOvertimeHrs: 1.5,
    LateOvertimeHrs: 0,
    IrregularHrs: 0,
  },
  SnackbarOpen: false,
};

export default function Application(state = initialState, action = {}) {
  switch (action.type) {

    case CONST.INIT: {
      if (!action.applicationList || action.applicationList === undefined) {
        return state;
      }
      return { ...state, ApplicationList: action.applicationList };
    }

    case CONST.OPEN_APPLDETAIL:
      return { ...state, ApplicationList: OpenApplDetail(state, action.applcationId) };

    case CONST.CLOSE_APPLDETAIL:
      return { ...state, ApplicationList: CloseApplDetail(state, action.applcationId) };

    case CONST.SHOW_FORM:
      return { ...state, ShowForm: !state.ShowForm };

    case CONST.SUBMIT:
      return { ...state, ApplicationList: AddListItem(state, action) };

    case CONST.DELETE:
      return { ...state, ApplicationList: RemoveListItem(state, action.applcationId) };

    case CONST.SNACKBAR:
      return { ...state, SnackbarOpen: action.snackbarOpen };

    default:
      return state;
  }
}

export function OpenApplDetail(state, id) {
  const newList = state.ApplicationList.slice();
  const i = newList.findIndex(item => item.ShowDetail === true);
  if (i > 0) {
    newList[i].ShowDetail = false;
  }
  const j = newList.findIndex(item => item.ApplicationId === id);
  newList[j].ShowDetail = true;
  return newList;
}

export function CloseApplDetail(state, id) {
  const newList = state.ApplicationList.slice();
  const i = newList.findIndex(item => item.ApplicationId === id);
  newList[i].ShowDetail = false;
  return newList;
}

export function AddListItem(state, action) {
  const newlist = state.ApplicationList.slice();
  return [action.applicationForm].concat(newlist);
}

export function RemoveListItem(state, id) {
  const i = state.ApplicationList.findIndex(item => item.ApplicationId === id);
  const newList = state.ApplicationList.filter((item, index) => index !== i);
  return newList;
}
