import React, { Component } from 'react';

import errorImg from '../images/404.png';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countdown: 5,
    };
  }

  componentDidMount() {
    const that = this;
    setInterval(function() {
      that._settime();
    }, 1000);
  }

  //倒计时
  _settime() {
    const { countdown } = this.state;
    let count = countdown - 1;
    this.setState({
      countdown: count,
    });
    if(count == 0) {
      location.reload();
    }
  }

  //点击返回首页
  _callBack() {
    location.reload();
  }

  render() {
    const { countdown } = this.state;

    return (
      <div style={{
        padding: 200,
        margin: '0px auto',
        textAlign: 'center',
      }}>
        <img src={errorImg} />
        <div style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 40,
        }}>
          Sorry…您访问的页面不存在！点此&nbsp;
          <a style={{ color: '#c0392b' }}
            onClick={() => this._callBack()}>
            <i className="fa fa-home"></i>
            返回首页
          </a>
        </div>
        <div style={{ fontSize: 18 }}>
          您可能输入了错误的网址，{countdown}秒后将会跳转到首页
        </div>
      </div>
    );
  }
}
