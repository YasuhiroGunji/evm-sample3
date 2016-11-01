import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';

import { Link } from 'react-router';

import './style.styl';

const style = {
  height: 100,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'block',
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
          <ul>
              <li>
                <Paper style={style} zDepth={3}>
                  <div>
                  </div>
                  <div>
                  </div>
                </Paper>
              </li>
          </ul>
        </div>
      </div>
    )
  };
}



// {this.props.children}