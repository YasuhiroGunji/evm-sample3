const initialState = {
  showMenu: true
}

export default function Base(state = initialState, action = {}) {
  switch (action.type) {
    case 'SHOW_MENU':
      return { ...state, showMenu: action.showMenu };

    default:
      return state;
  }
}