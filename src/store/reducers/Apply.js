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
  apply: {
    applyList: 
    [{
      id: 1,
      date: getDate(),
      workItem: '画面一覧作成',
      kokyakuCd: 'IKD',
      projectCd: 'KFS5',
      planStartTime: '18:00',
      planEndTime: '20:00',
      actualStartTime: '18:00',
      actualEndTime: '21:00',
      overTime: '2.5',
      lateOverTime: '0',
    },
    {
      id: 2,
      date: getDate(),
      workItem: '画面一覧作成',
      kokyakuCd: 'IKD',
      projectCd: 'KFS5',
      planStartTime: '18:00',
      planEndTime: '20:00',
      actualStartTime: '18:00',
      actualEndTime: '21:00',
      overTime: '2.5',
      lateOverTime: '0',
    }],
    applyForm: {
      date: new Date(),
      kokyakuCd: "IKD",
      projectCd: "KFS5",
      startTime: "18:00",
      text: "入力してください",
    },
  }
}

// action で受け取った値を state に適用して更新する
export default function Apply(state = initialState, action = {}) {

  switch (action.type) {
    case "INIT":
      return {
        ...state,
        date, kokyakuCd, projectCd, startTime, text
      };
    case "SUBMIT":
      return { ...state, 
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