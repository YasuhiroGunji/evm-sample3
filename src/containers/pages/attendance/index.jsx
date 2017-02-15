import * as React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './attendancestyle.styl';
import TableData from './data';

export default class Attendance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '350px',
      tableData: TableData,
    };
  }

  handleChange(event) {
    this.setState({ height: event.target.value });
  }

  render() {
    const data = this.state.tableData;
    return (
      <div>
        <Paper zDepth={1} className={'l_header'}>
          <div>
            <div className={'md_header_title'}>
              <span>第49期</span>
              <span>2月度</span>
              <span>2017/01/11〜2017/02/10</span>
            </div>
          </div>
          <div>
            <div className={'md_header_content'}>
              <div>
                <RaisedButton
                  label={'JOBCAN取得'}
                  primary
                  style={{ marginLeft: '18px' }}
                />
              </div>
              <div className={'md_personal'}>
                <div>
                  <span>所属部署：オープンシステム統括部</span>
                </div>
                <div>
                  <span>社員番号：42015</span>
                </div>
                <div>
                  <span>社員名：郡司　康弘</span>
                </div>
              </div>
            </div>
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
            <li>早出</li>
            <li>遅刻</li>
            <li>早退</li>
            <li>事故</li>
            <li>外出</li>
            <li>徹夜</li>
            <li>変則</li>
            <li>備考</li>
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
                        return <Checkbox checked={row.tyokkou} disabled />;
                      }
                      return <Checkbox checked={row.tyokkou} />;
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
                  <li>{row.hayade}</li>
                  <li>{row.tikoku}</li>
                  <li>{row.soutai}</li>
                  <li>{row.jiko}</li>
                  <li>{row.gaisyutu}</li>
                  <li>{row.tetuya}</li>
                  <li>{row.hensoku}</li>
                  <li>{row.bikou}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Paper className={'l_footer'}>
          <div>footer</div>
        </Paper>
        {/*<Table
          height={this.state.height}
          fixedHeader
          fixedFooter
          selectable
          style={style.verticalAlign}
        >
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
            enableSelectAll={false}
            style={style.verticalAlign}
            className={'md_headermagin_override'}
          >
            <TableRow style={{ width: '500px' }}>
              <TableHeaderColumn colSpan={18} style={{ textAlign: 'center' }}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={style.verticalLine}>日付</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>曜日</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>勤務形態</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>時間</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>出社</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>退社</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>直行</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>直帰</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>普通</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>深夜</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>早出</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>遅刻</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>早退</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>事故</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>外出</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>哲也</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>変則(2)</TableHeaderColumn>
              <TableHeaderColumn style={style.verticalLine}>備考</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover
            stripedRows={false}
            displayRowCheckbox={false}
            style={style.verticalAlign}
          >
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn style={style.verticalLine}>{row.date}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.dayOfWeek}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.kinmu}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.time}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.syussya}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.taisay}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>
                  <Checkbox checked={row.tyokkou} />
                </TableRowColumn>
                <TableRowColumn style={style.verticalLine}>
                  <Checkbox checked={row.tyokki} />
                </TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.hutuu}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.shinya}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.hayade}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.tikoku}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.soutai}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.jiko}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.gaisyutu}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.tetuya}</TableRowColumn>
                <TableRowColumn style={style.verticalLine}>{row.hensoku}</TableRowColumn>
                <TableRowColumn>{row.bikou}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableRowColumn colSpan="17">日付</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="17">
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>

        </Table>*/}
      </div>
    );
  }
}
