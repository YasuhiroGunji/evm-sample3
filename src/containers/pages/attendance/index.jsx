import * as React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

import './attendancestyle.styl';
import TableData from './data';

const style = {
  verticalLine: {
    borderRight: '1px solid #ddd',
    width: '70px',
  },
  verticalAlign: {
    verticalAlign: 'middle',
  },
};

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
        <Table
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

        </Table>
      </div>
    );
  }
}
