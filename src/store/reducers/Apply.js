const initialState = {
  empId: 42015,
  showForm: true,
  applyList: [],
  applyForm: {
    id: 0,
    ScheduledDate: new Date(),
    CustomerCd: 'IKD',
    ProjectCd: 'KFS5',
    OvertimeStart: '18:00',
    OvertimeEnd: '20:00',
    WorkContent: '',
  },
  snackbarOpen: false,
};

export default function Apply(state = initialState, action = {}) {

  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        applyList: action.applyList,
      };
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
