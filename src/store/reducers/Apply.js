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
  applyList: 
  [
    {
      Id: 0,
      EmpId: "42015",
      ScheduledDate: getDate(),
      CustomerCd: "IKD",
      ProjectCd: "KFS5",
      WorkContent: "画面開発",
      PlanStartTIme: 1800,
      PlanEndTime: 2100,
      OvertimeStart: 1800,
      OvertimeEnd: 2000,
      OverTime: 1.5,
      LateOverTime: 0,
    },
  ],
  applyForm: {
    date: new Date(),
    kokyakuCd: "IKD",
    projectCd: "KFS5",
    startTime: "18:00",
    text: "入力してください",
    handleTextChange: null,
    submit: null,
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
      return {
        ...state, 
        applyForm: action.applyForm
      };
    case "HIDE":
      return Object.assign({}, state, {
        flag: false
      });
    default: 
      return state;
  }
}