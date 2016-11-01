import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router';

import './style.styl';

const style = {
  cardstyle: {
    height: 100,
    marginTop: 2,
    display: 'block',
  },
  formstyle: {
    overflowY: 'auto',
    display: 'block',
  },
  overflowy: {
    overflowY: 'auto',
  },
  iconStyle:{
    marginRight: 24,
  }
};

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { showMenu: false, };
  }

  onMenuStateChange(showMenu){
      this.setState({ showMenu });
  }

  render() {
    return (
      <div className="l_wrapper">
        <AppBar
          title="evm-sampl2"
          onLeftIconButtonTouchTap={() => this.onMenuStateChange(true)}
        />
        <Drawer
          docked={false}
          open={this.state.showMenu}
          width={200}
          onRequestChange={(showMenu) => this.onMenuStateChange(showMenu)}
        >
          <Link to="/"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Top</MenuItem></Link>
          <Link to="/attendance"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Attendancce</MenuItem></Link>
          <Link to="/apply"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Apply</MenuItem></Link>
        </Drawer>

        <div className="l_wrapper_content">

          <div className="l_list_container">

            <div style={style.overflowy} className="m_cardlist">
              <div className="l_week_container">
                <div className="l_week_item">
                  今週
                </div>
              </div>
              <Paper style={style.cardstyle} zDepth={2}>
                <div className="js">
                  <FontIcon
                    className="muidocs-icon-action-home"
                    style={iconStyles}
                  />
                </div>
                <div className="iG">
                    
                </div>
                <div className="hY">
                  
                </div>
              </Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <div className="l_week_container">
                <div className="l_week_item">
                  先週
                </div>
              </div>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
              <Paper style={style.cardstyle} zDepth={2}></Paper>
            </div>

          </div>

          <div className="l_form_container">
            <Paper style={style.formstyle} zDepth={3}>

              <div className="l_text_container">
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Floating Label Text"
                /><br />
              </div>
              <RaisedButton label="Default" style={style} />
              <RaisedButton label="Primary" primary={true} style={style} />
            </Paper>
          </div>
        </div>

      </div>
    )
  };
}



// {this.props.children}