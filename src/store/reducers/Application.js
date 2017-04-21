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

    case CONST.ACTION_INIT: {
      if (!action.applicationList) {
        return { ...state, ApplicationList: action.applicationList };
      }
      const ApplicationList = action.applicationList.map(item => ({
        ApplicationId: item.ApplicationId,
        ApplicationCd: item.ApplicationCd,
        ScheduledDate: item.ScheduledDate,
        CustomerCd: item.CustomerCd,
        ProjectCd: item.ProjectCd,
        OvertimeStart: item.OvertimeStart,
        OvertimeEnd: item.OvertimeEnd,
        OvertimeActualStart: item.OvertimeActualStart,
        OvertimeActualEnd: item.OvertimeActualEnd,
        NomalOvertimeHrs: item.NomalOvertimeHrs,
        LateOvertimeHrs: item.LateOvertimeHrs,
        IrregularStart: item.IrregularStart,
        IrregularEnd: item.IrregularEnd,
        IrregularActualStart: item.IrregularActualStart,
        IrregularActualEnd: item.IrregularActualEnd,
        IrregularHrs: item.IrregularHrs,
        WorkContent: item.WorkContent,
        ShowDetail: false,
      }));

      return { ...state, ApplicationList };
    }

    case CONST.ACTION_FORM:
      return { ...state, ShowForm: action.showForm };

    case CONST.ACTION_SUBMIT:
      return { ...state, ApplicationList: AddListItem(state, action) };

    case CONST.ACTION_DELETE:
      return { ...state, ApplicationList: action.applicationList };

    case CONST.ACTION_SNACKBAR:
      return { ...state, SnackbarOpen: action.snackbarOpen };

    default:
      return state;
  }
}

export function AddListItem(state, action) {
  if (state.ApplicationList) {
    return [action.applicationForm].concat(state.ApplicationList);
  }
  return [action.applicationForm];
}
