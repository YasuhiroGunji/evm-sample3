import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import * as attendanceActions from '../../../actions/Attendance';

import './attendancestyle.styl';
import TableData from './data';

class Attendance extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ showMenu: nextProps.showMenu });
  }
  onChangeCheckbox(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const data = TableData;
    return (
      <div
        className={ClassSet({
          l_attendance_container: true,
          is_open_menu: this.props.showMenu,
        })}
      >
        <Paper zDepth={1} className={'l_header'}>
          <div>
            <div className={'md_header_title'}>
              <div>第49期</div>
              <div>2月度</div>
              <div>2017/01/11〜2017/02/10</div>
              <div>
                <RaisedButton
                  label={'JOBCAN取得'}
                  primary
                />
              </div>
              <span>所属部署：オープンシステム統括部</span>
              <span>社員番号：42015</span>
              <span>社員名：郡司　康弘</span>
            </div>
          </div>
          <div>
            
          </div>
        </Paper>
        <Paper zDepth={1} className={'l_table_header'}>
          <ul className={'md_table_header'}>
            <li>日付</li>
            <li>曜日</li>
            <li style={{ width: '70px' }}>勤務形態</li>
            <li>時間</li>
            <li>出社</li>
            <li>退社</li>
            <li>直行</li>
            <li>直帰</li>
            <li>普通</li>
            <li>深夜</li>
            <li>遅刻</li>
            <li>早退</li>
            <li>事故</li>
            <li>外出</li>
            <li>徹夜</li>
            <li>変則</li>
          </ul>
        </Paper>
        <div className={'l_table'}>
          <ul className={'md_table'}>
            {data.map((row, index) => (
              <li>
                <ul className={'md_table_row'} key={index}>
                  <li>{row.date}</li>
                  <li>{row.dayOfWeek}</li>
                  <li style={{ width: '70px' }}>{row.kinmu}</li>
                  <li>{row.time}</li>
                  <li>{row.syussya}</li>
                  <li>{row.taisay}</li>
                  <li>
                    {(() => {
                      if (row.dayOfWeek === '土' || row.dayOfWeek === '日') {
                        return <Checkbox checked={row.tyokkou} disabled onChange={() => this.onChangeCheckbox(this)} />;
                      }
                      return <Checkbox checked={row.tyokkou} onChange={() => this.onChangeCheckbox(this)} />;
                    })()}
                  </li>
                  <li>
                    {(() => {
                      if (row.dayOfWeek === '土' || row.dayOfWeek === '日') {
                        return <Checkbox checked={row.tyokki} disabled />;
                      }
                      return <Checkbox checked={row.tyokki} />;
                    })()}
                  </li>
                  <li>{row.hutuu}</li>
                  <li>{row.shinya}</li>
                  <li>{row.tikoku}</li>
                  <li>{row.soutai}</li>
                  <li>{row.jiko}</li>
                  <li>{row.gaisyutu}</li>
                  <li>{row.tetuya}</li>
                  <li>{row.hensoku}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { showForm } = state.Attendance;
  const { showMenu } = state.Base;
  return {
    showForm, showMenu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attendanceActionBind: bindActionCreators(attendanceActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Attendance);
