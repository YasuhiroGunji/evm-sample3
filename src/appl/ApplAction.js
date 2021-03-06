// action
import * as API from '../utils/Api';
import * as Util from '../utils/Common';
// const
import * as CONST from './ApplConst';
// enum
import { APPL_CD } from '../utils/Enum';

const SetApplList = response =>
  response.ApplList.map(item => ({
    ApplId: item.ApplId,
    ApplCd: item.ApplCd,
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
        const applList = SetApplList(obj);

        dispatch({
          type: CONST.INIT,
          applList,
        });
      },
    ).catch(
      err => console.error(err),
    );
  };
};

export const OvertimeSubmit = (formData) => {
  const postData = {};
  const yyyyMM = Util.SpliceSlashYYYYMM(`${formData.MonthValue}`);
  const dd = Util.ZeroFill(formData.DayValue);

  // TODO：社員番号はLocalStorageに保存
  postData.ApplId = Util.GenerateKey();
  postData.ApplCd = APPL_CD.OVERTIME;
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
      applId: id,
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
      applId: id,
    });
    dispatch({
      type: CONST.HIDE_FORM,
    });
  };

export const CloseListItem = id =>
  (dispatch) => {
    dispatch({
      type: CONST.CLOSE_APPLDETAIL,
      applId: id,
    });
  };

export const Snackbar = isOpen =>
  dispatch =>
    dispatch({
      type: CONST.SNACKBAR,
      snackbarOpen: isOpen,
    });

export const InitialEdit = (obj) =>
  dispatch =>
    dispatch({
      type: CONST.SNACKBAR,
      snackbarOpen: obj,
    });
