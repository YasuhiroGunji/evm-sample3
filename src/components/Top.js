import React, { Proptype } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    sendDmailBtn: {
    display: 'inline-block',
    marginLeft: '15px',
    marginBottom: '20px'
  }
}

const Top = ({
    isfatherAlive,
    isAkibaMoe,
    onClickSendDmail
}) => (
    <div>
        <div>
            <span>"父："{ isfatherAlive }</span><br />
            <span>"秋葉原萌え文化："{ isAkibaMoe }</span>
        </div>
        <RaisedButton
            onClick={ e => onClickSendDmail() }
            label="過去にメール送信"
            style={ styles.sendDmailBtn }
        />
    </div>
)

Top.Proptypes = {
    isfatherAlive: Proptypes.bool.isRequired,
    isAkibaMoe: Proptypes.bool.isRequired,
    onClickSendDmail: Proptypes.func.isRequired,
}

export default Top;