// action
import * as API from '../utils/Api';
import * as Util from '../utils/Common';
// const
import * as CONST from './AtndConst';

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
    API.Get('Attendance/GetAttendList', empId, yyyymm)
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
  };
};

const ConvertPostData = tableData =>
  tableData.map((item) => {
    const obj = {};
    obj.AttendDate = item.date;
    obj.GoDirectly = item.tyokkou;
    obj.ReturnDirectly = item.tyokki;
    return obj;
  });

export const ApplyAttendance = (tableData) => {
  const AttendRequest = ConvertPostData(tableData);

  return (dispatch) => {
    API.Post('Attendance/PostAttendApplication', AttendRequest)
    .then(
      (obj) => {
        const response = obj;

        dispatch({
          type: CONST.APPLY,

        });
      },
    ).catch(
      err => console.error(err),
    );
  };
};

export const DeleteAttendance = (empId) => {

  const yyyymm = Util.GetCurrentTimeStringYYYYMM();

  return (dispatch) => {
    API.Get('Attendance/DeleteAttendApplication', empId, yyyymm)
    .then(
      (obj) => {
        const response = obj;

        dispatch({
          type: CONST.DELETE,
        });
      },
    ).catch(
      err => console.error(err),
    );

  }
}
