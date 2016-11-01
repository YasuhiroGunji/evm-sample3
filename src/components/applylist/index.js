import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import Datas from './data';

const style = {
  height: 100,
  width: 400,
  margin: 10,
  textAlign: 'center',
  display: 'block',
};

const data = Datas;

export default class ApplyList extends Component {

  render() {
    return (
      <div>
        <h2>applylist</h2>
          <ul>
            {data.map((d) => {
              return (
              <li>
                <Paper style={style} zDepth={3}>
                  <div>
                    {d.id}
                  </div>
                  <div>
                    {d.text}
                  </div>
                </Paper>
              </li>
              )
            })}
          </ul>
      </div>
    )
  };

}
