// action
import * as API from './Api';
import * as Util from './Util';
// const
import * as CONST from '../const/Application';
// enum
import { APPL_CD } from '../const/Enum';

const SetApplList = response =>
  response.ApplList.map(item => ({
    ApplicationId: item.ApplId,
    ApplicationCd: item.ApplCd,
    ScheduledDate: Util.DateToStringYYYYMMDD(item.ApplDate),
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

export const Init = (empId) => {
  const yyyymm = Util.GetCurrentTimeStringYYYYMM();

  return (dispatch) => {
    API.Get('Appl/GetApplList', empId, yyyymm)
    .then(
      (obj) => {
        // console.debug(obj);
        const applicationList = SetApplList(obj);

        dispatch({
          type: CONST.INIT,
          applicationList,
        });
      },
    ).catch(
      err => console.error(err),
    );

    // dispatch({
    //   type: CONST.INIT,
    //   applyList: [],
    // });
  };
};



export const OvertimeSubmit = (formData) => {
  const postData = {};
  const yyyyMM = Util.SpliceSlashYYYYMM(`${formData.MonthValue}`);
  const dd = Util.ZeroFill(formData.DayValue);

  // TODO：社員番号はLocalStorageに保存
  postData.ApplicationId = Util.GenerateKey();
  postData.ApplicationCd = APPL_CD.OVERTIME;
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
      type: CONST.SUBMIT,
      applicationForm: postData,
    });

    // API.Post('Apply/CreateOvertimeRequest', postData)
    // .then(
    //   (obj) => {
    //     console.debug(obj);
    //     dispatch({
    //       type: CONST.SNACKBAR,
    //       snackbarOpen: true,
    //     });
    //   },
    // ).catch(
    //   (err) => { console.error(err); },
    // );

    setTimeout(() => {
      dispatch({
        type: CONST.SNACKBAR,
        snackbarOpen: true,
      });
    }, 2000);
  };
};

export const DeleteApplication = id =>
  (dispatch) => {
    dispatch({
      type: CONST.DELETE,
      applcationId: id,
    });
  };

export const ShowForm = () =>
  dispatch =>
    dispatch({
      type: CONST.SHOW_FORM,
    });

export const OpenListItem = id =>
  (dispatch) => {
    dispatch({
      type: CONST.OPEN_APPLDETAIL,
      applcationId: id,
    });
  };

export const CloseListItem = id =>
  (dispatch) => {
    dispatch({
      type: CONST.CLOSE_APPLDETAIL,
      applcationId: id,
    });
  };



export const Snackbar = isOpen =>
  dispatch =>
    dispatch({
      type: CONST.SNACKBAR,
      snackbarOpen: isOpen,
    });

