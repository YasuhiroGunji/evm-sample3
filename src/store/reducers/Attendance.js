const initialState = {
  EmpId: 42015,
};

export default function Attendance(state = initialState, action = {}) {
  switch (action.type) {
    case 'INIT':
      return { ...state, showMenu: action.showMenu };

    default:
      return state;
  }
}
