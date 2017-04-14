import * as API from './Api';
import * as Util from './Util';

import * as CONST from '../const/Application';

export const Init = (empId) => {
  return (dispatch) => {
    // API.Get('Apply/GetOvertimeList', empId)
    // .then(
    //   (obj) => {
    //     console.debug(obj);

    //     dispatch({
    //       type: ACTION_INIT,
    //       applyList: obj.OvertimeList,
    //     });
    //   },
    // ).catch(
    //   err => console.error(err),
    // );

    dispatch({
      type: CONST.ACTION_INIT,
      applyList: [],
    });
  };
};

export const ApplicationItem = {
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

export const Submit = (formData, applicationCd) => {
  const postData = {};
  const yyyyMM = Util.SpliceSlashYYYYMM(`${formData.MonthValue}`);
  const dd = Util.ZeroFill(formData.DayValue);

  // TODO：社員番号はLocalStorageに保存
  postData.ApplicationId = Util.GenerateKey();
  postData.ApplicationCd = applicationCd;
  postData.ScheduledDate = `${yyyyMM}/${dd}`;
  postData.CustomerCd = formData.CustomerCd;
  postData.ProjectCd = formData.ProjectCd;
  postData.WorkContent = formData.WorkContent;
  postData.OvertimeStart = formData.OvertimeStart;
  postData.OvertimeEnd = formData.OvertimeEnd;
  postData.OvertimeActualStart = formData.OvertimeActualStart;
  postData.OvertimeActualEnd = formData.OvertimeActualEnd;
  postData.NomalOvertimeHrs = formData.NomalOvertimeHrs;
  postData.LateOvertimeHrs = formData.LateOvertimeHrs;
  postData.IrregularStart = formData.IrregularStart;
  postData.IrregularEnd = formData.IrregularEnd;
  postData.IrregularActualStart = formData.IrregularActualStart;
  postData.IrregularActualEnd = formData.IrregularActualEnd;
  postData.IrregularHrs = formData.IrregularHrs;

  // dispatch --> add list in progress
  // dispatch --> post data
  //   success
  //     dispatch --> open snackbar
  //     dispatch --> commit list status
  //     dispatch --> update form
  //   failed
  //     dispatch --> roleback list status
  //     dispatch --> open snackbar

  return (dispatch) => {
    dispatch({
      type: CONST.ACTION_SUBMIT,
      applicationForm: postData,
    });

    // API.Post('Apply/CreateOvertimeRequest', postData)
    // .then(
    //   (obj) => {
    //     console.debug(obj);
    //     dispatch({
    //       type: CONST.ACTION_SNACKBAR,
    //       snackbarOpen: true,
    //     });
    //   },
    // ).catch(
    //   (err) => { console.error(err); },
    // );

    setTimeout(() => {
      dispatch({
        type: CONST.ACTION_SNACKBAR,
        snackbarOpen: true,
      });
    }, 2000);
  };
};

export const Snackbar = isOpen =>
  dispatch =>
    dispatch({
      type: CONST.ACTION_SNACKBAR,
      snackbarOpen: isOpen,
    });

