// export default function top (state = { isFatherAlive, isMoeAkiba }, action = {}) {
//     switch (action.type) {
//         case 'SEND_FAILIS_D_MAIL':
//             return {...state, 
//                 isFatherAlive = action.isFatherAlive,
//                 isMoeAkiba = action.isMoeAkiba
//             }
//         default:
//             return state;
//     }
// }
function getDate(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var date = date.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}
	var strDate = year + "/" + month + "/" + date;
	return strDate;
}
// 初期値の設定をしてあげる
const initialState = {
  applyList: [],
  applyForm: {
    ScheduledDate: new Date(),
    CustomerCd: "IKD",
    ProjectCd: "KFS5",
    OvertimeStart: "18:00",
    OvertimeEnd: "20:00",
    WorkContent: "",
  }
}

// action で受け取った値を state に適用して更新する
export default function Apply(state = initialState, action = {}) {

  switch (action.type) {
    case "INIT":
      return {
        ...state,
        applyList: action.applyList
      };
    case "SUBMIT":
      return {...state, applyList: state.applyList.concat([action.applyForm])};

    case "HIDE":
      return Object.assign({}, state, {
        flag: false
      });
    default: 
      return state;
  }
}