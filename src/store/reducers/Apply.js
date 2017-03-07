const initialState = {
  empId: 42015,
  showForm: true,
  applyList: [],
  applyForm: {
    ApplyId: -1,
    MonthValue: 201703,
    DayValue: 6,
    ScheduledDate: new Date(),
    CustomerCd: 'IKD',
    ProjectCd: 'KFS5',
    OvertimeStart: '18:00',
    OvertimeEnd: '20:00',
    WorkContent: '',
  },
  snackbarOpen: false,
};

const ApplyItem = {
  ApplyId: -1,
  CustomerCd: '',
  IrregularActualEnd: null,
  IrregularActualStart: null,
  IrregularEnd: null,
  IrregularStart: null,
  OvertimeActualEnd: null,
  OvertimeActualStart: null,
  OvertimeEnd: 2000,
  OvertimeStart: 1800,
  ProjectCd: '',
  ScheduledDate: new Date(),
  WorkContent: '',
  ShowDetail: false,
};

export default function Apply(state = initialState, action = {}) {

  switch (action.type) {
    case 'INIT': {
      if (!action.applyList) {
        return { ...state, applyList: action.applyList };
      }
      const list = action.applyList.map(item => (
        {
          ApplyId: item.ApplyId,
          CustomerCd: item.CustomerCd,
          IrregularActualEnd: item.IrregularActualEnd,
          IrregularActualStart: item.IrregularActualStart,
          IrregularEnd: item.IrregularEnd,
          IrregularStart: item.IrregularStart,
          OvertimeActualEnd: item.OvertimeActualEnd,
          OvertimeActualStart: item.OvertimeActualStart,
          OvertimeEnd: item.OvertimeEnd,
          OvertimeStart: item.OvertimeStart,
          ProjectCd: item.ProjectCd,
          ScheduledDate: item.ScheduledDate,
          WorkContent: item.WorkContent,
          ShowDetail: false,
        }),
      );

      return { ...state, applyList: list };
    }
    case 'FORM':
      return { ...state, showForm: action.showForm };

    case 'SUBMIT':
      return { ...state, applyList: [action.applyForm].concat(state.applyList) };

    case 'DETAIL':
      return { ...state, applyList: state.applyList };

    case 'DELETE':
      return { ...state, applyList: state.applyList.concat([action.applyForm]) };

    case 'SNACKBAR':
      return { ...state, snackbarOpen: action.snackbarOpen };

    case 'HIDE':
      return Object.assign({}, state, {
        flag: false,
      });

    default:
      return state;
  }
}
