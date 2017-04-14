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
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  componentWillMount() {
    this.setState({ ShowMenu: true, tableData: TableData });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ShowMenu: nextProps.ShowMenu });
  }

  onScroll() {
    const header = document.getElementsByClassName('l_header')[0];
    header.style.left = header.style.left - window.scrollX + 'px';
    console.debug('scroll');
  }

  onChangeCheckbox(e, isInputChecked) {
    let newList = this.state.tableData.slice();
    newList[e.target.id].tyokkou = isInputChecked;
    this.setState({ tableData: newList });
  }

  render() {
    return (
      <div
        className={ClassSet({
          l_attendance_container: true,
          is_open_menu: this.state.ShowMenu,
        })}
      >
        <div className={'l_attendance_content'}>
          <Paper zDepth={1} className={'l_header'}>
            <div className={'l_header_row'}>
              <div>
                <span className={'is_bold'}>第49期</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>2月度</span>
                <span style={{ fontWeight: 'bold' }}>(2017/01/11〜2017/02/10)</span>
              </div>
              <div>
                <RaisedButton
                  label={'JOBCAN取得'}
                  primary
                  style={{ width: 120 }}
                />
              </div>
              <div><span>所属部署：</span><span>オープンシステム統括部</span></div>
              <div><span>社員番号：</span><span>42015</span></div>
              <div><span>社員名：</span><span>郡司　康弘</span></div>
            </div>
            <div className={'l_header_row'}>
              <div>
                <table className={'md_header_table'}>
                  <thead>
                    <tr>
                      <th colSpan={10}>形態・休暇</th>
                    </tr>
                    <tr>
                      <th>通常</th>
                      <th>変則</th>
                      <th>出張</th>
                      <th>休出</th>
                      <th>有給</th>
                      <th>特休</th>
                      <th>徹休</th>
                      <th>振休</th>
                      <th>病欠</th>
                      <th>欠勤</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className={'md_header_table_min'}>
                  <thead>
                    <tr>
                      <th colSpan={5}>勤怠</th>
                    </tr>
                    <tr>
                      <th style={{ width: 60 }}>遅早時間</th>
                      <th>遅刻</th>
                      <th>早退</th>
                      <th>事故</th>
                      <th>外出</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: 60 }}>1.5</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className={'md_header_table_min'}>
                  <thead>
                    <tr>
                      <th colSpan={5}>残業・変則</th>
                    </tr>
                    <tr>
                      <th>普通</th>
                      <th>深夜</th>
                      <th>変則</th>
                      <th>合計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>15.0</td>
                      <td>5.5</td>
                      <td>0</td>
                      <td>20.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div>
                  <RaisedButton
                    label={'申請'}
                    primary
                    style={{ width: 75, height: 30 }}
                  />
                </div>
                <div>
                  <RaisedButton
                    label={'取消'}
                    disabled
                    style={{ width: 75, height: 30, marginTop: 5 }}
                  />
                </div>
              </div>
            </div>
          </Paper>
          <Paper zDepth={1} className={'l_tableheader'}>
            <ul className={'md_tableheader_row'}>
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
          <div className={'l_tablebody'}>
            <ul className={'md_tablebody'}>
              {this.state.tableData.map((row, index) => (
                <li key={index}>
                  <ul className={'md_tablebody_row'}>
                    <li>{row.date}</li>
                    <li>{row.dayOfWeek}</li>
                    <li style={{ width: '70px' }}>{row.kinmu}</li>
                    <li>{row.time}</li>
                    <li>{row.syussya}</li>
                    <li>{row.taisay}</li>
                    <li>
                      <div className={'md_checkbox_wrap'}>
                        {(() => {
                          if (row.dayOfWeek === '土' || row.dayOfWeek === '日') {
                            return <Checkbox checked={row.tyokkou} disabled />;
                          }
                          return (
                            <Checkbox
                              id={index}
                              checked={row.tyokkou}
                              onCheck={this.onChangeCheckbox}
                            />
                          );
                        })()}
                      </div>
                    </li>
                    <li>
                      <div className={'md_checkbox_wrap'}>
                        {(() => {
                          if (row.dayOfWeek === '土' || row.dayOfWeek === '日') {
                            return <Checkbox checked={row.tyokki} disabled />;
                          }
                          return <Checkbox checked={row.tyokki} />;
                        })()}
                      </div>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tableData } = state.Attendance;
  const { ShowMenu } = state.Base;
  return {
    tableData, ShowMenu,
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
