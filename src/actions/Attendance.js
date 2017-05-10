// action
import * as API from './Api';
import * as Util from './Util';
// const
import * as CONST from '../const/Application';

const SetAtendList = response =>
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
    API.Get('Attendance/GetAttendance', empId, yyyymm)
    .then(
      (obj) => {
        // console.debug(obj);
        const attendanceList = SetAtendList(obj);

        dispatch({
          type: CONST.INIT,
          attendanceList,
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
