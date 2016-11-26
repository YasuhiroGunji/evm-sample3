import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import {grey400, yellow600, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FileFolder from 'material-ui/svg-icons/file/folder';
import MenuItem from 'material-ui/MenuItem';

import * as applyActions from '../../../actions/Apply';

import './applystyle.styl';

const style = {
  cardstyle: {
    height: 72,
    marginTop: 2,
    display: 'block',
  },
  iconStyle:{
    fontSize: 3.0 + 'rem',
    marginRight: 24,
  },
  marginStyle:{
    marginRight: 8,
  }
};
const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="top-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Pined</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class Apply extends Component {

  constructor(props) {
    super(props);

    this.state = { applyForm: this.props.applyForm };
  }

  onSubmit() {
    const { applyActionBind } = this.props;

    const applyForm = new Object();
    applyForm["date"] = this.state.applyForm.date;
    applyForm["kokyakuCd"] = this.state.applyForm.kokyakuCd;
    applyForm["projectCd"] = this.state.applyForm.projectCd;
    applyForm["startTime"] = this.state.applyForm.startTime;
    applyForm["text"] = this.state.applyForm.text;

    applyActionBind.submit(applyForm);
  }; 

  handleDateChange = (x, event) => {
    console.log(event);
    this.setState({
      applyForm: Object.assign({}, this.state.applyForm, {
        date: event
      })
    });
  };
  handleChange = (event) => {
    this.setState({
      applyForm: Object.assign({}, this.state.applyForm, {
        kokyakuCd: event.target.value
      })
    });
  };

  render() {
    return (
      <div className="l_flex_container">

        <div className="l_flex_box">

          <div className="content">

            <div className="l_week_container">
              <div className="l_week_item">
                今週
              </div>
            </div>
            <List>
              <Paper style={style.cardstyle} zDepth={2}>
                <ListItem
                  leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
                  rightIcon={rightIconMenu}
                  primaryText={this.state.applyForm.date + ''}
                  secondaryText={
                    <p>
                      <span style={style.marginStyle}>予定：18:00～21:00</span>
                      <span style={style.marginStyle}>実績：18:00～21:00</span>
                      <span style={style.marginStyle}>普通：2.5 深夜：0</span>
                    </p>
                  }
                />
              </Paper>
              <Paper style={style.cardstyle} zDepth={2}>
                <ListItem
                  leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
                  rightIcon={rightIconMenu}
                  primaryText="2016/9/12(月) 画面一覧作成"
                  secondaryText={
                    <p>
                      <span style={style.marginStyle}>予定：18:00～21:00</span>
                      <span style={style.marginStyle}>実績：18:00～21:00</span>
                      <span style={style.marginStyle}>普通：2.5 深夜：0</span>
                    </p>
                  }
                />
              </Paper>
            </List>
            <div className="l_week_container">
              <div className="l_week_item">
                先週
              </div>
            </div>
            <List>
              <Paper style={style.cardstyle} zDepth={2}>
                <ListItem
                  leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
                  rightIcon={rightIconMenu}
                  primaryText="2016/9/12(月) 画面一覧作成"
                  secondaryText={
                    <p>
                      <span style={style.marginStyle}>予定：18:00～21:00</span>
                      <span style={style.marginStyle}>実績：18:00～21:00</span>
                      <span style={style.marginStyle}>普通：2.5 深夜：0</span>
                    </p>
                  }
                />
              </Paper>
              <Paper style={style.cardstyle} zDepth={2}>
                <ListItem
                  leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
                  rightIcon={rightIconMenu}
                  primaryText="2016/9/12(月) 画面一覧作成"
                  secondaryText={
                    <p>
                      <span style={style.marginStyle}>予定：18:00～21:00</span>
                      <span style={style.marginStyle}>実績：18:00～21:00</span>
                      <span style={style.marginStyle}>普通：2.5 深夜：0</span>
                    </p>
                  }
                />
              </Paper>
            </List>
          </div>

        </div>

        <div className="l_flex_box">

          <div className="content">

            <Paper zDepth={3}>

            <div className="l_form_container">
              <div className="l_form_row">
                <DatePicker
                  hintText="申請日"
                  floatingLabelText="申請日"
                  autoOk={true} 
                  defaultDate={this.state.applyForm.date}
                  ref="date"
                  onChange={(x, event) => this.handleDateChange(x, event)}
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="顧客コード"
                  value={this.state.applyForm.kokyakuCd}
                  ref="kokyakuCd"
                  onChange={this.handleChange}
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="プロジェクトコード"
                  value={this.state.applyForm.projectCd}
                  ref="projectCd"
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="作業開始時間"
                  value={this.state.applyForm.startTime}
                  ref="startTime"
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="作業内容"
                  multiLine={true}
                  rows={1}
                  rowsMax={5}
                  value={this.state.applyForm.text}
                  ref="text"
                />
              </div>
              <div className="l_form_row md_form_button">
                <RaisedButton label="Cancel" style={style.marginStyle} />
                <RaisedButton 
                  label="Submit" 
                  primary={true} 
                  style={style.marginStyle}
                  onTouchTap={() => this.onSubmit()}
                />
              </div>
            
            </div>

            </Paper>
          </div>
        </div>
      </div>
    )
  };
}

Apply.propTypes = {
  applyForm : PropTypes.shape({
      date: PropTypes.object.isRequired,
      kokyakuCd: PropTypes.string.isRequired,
      projectCd: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
  }),
  submit: PropTypes.func,
}

function mapStateToProps( state ){
  const {
    applyForm
  } = state.Apply;
  return  {
    applyForm
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    applyActionBind: bindActionCreators(applyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply);
