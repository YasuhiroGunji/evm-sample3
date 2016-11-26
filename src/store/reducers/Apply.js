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

// 初期値の設定をしてあげる
const initialState = {
    date: new Date(),
    kokyakuCd: "IKD",
    projectCd: "KFS5",
    startTime: "18:00",
    text: "入力してください",
}

// action で受け取った値を state に適用して更新する
export default function Apply(state = initialState, action = {}) {
    const { date, kokyakuCd, projectCd, startTime, text } = action;
    switch (action.type) {
        case "INIT":
            // 今回ここでは状態の更新だけだが、action の値によってさらに別な値も変えたりするなど
            return {
                ...state,
                date, kokyakuCd, projectCd, startTime, text
            };
        case "SHOW":
            return Object.assign({}, state, {
                flag: true
            });
        case "HIDE":
            return Object.assign({}, state, {
                flag: false
            });
        default: 
           return state;
    }
}