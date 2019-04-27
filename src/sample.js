import React, { Component } from 'react';

class Sample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }
    
    // handleClickメソッドを定義してください
    plus() {
      this.setState({count: this.state.count + 1})
    }

    minus() {
      this.setState({count: this.state.count - 1})
    }
    
    render() {
      return (
        <div>
          <h1>
            {this.state.count}
          </h1>
          {/* <button>タグ内でonClickイベントを追加してください */}
          <button onClick={() => {this.plus()}}>＋</button>
          <button onClick={() => {this.minus()}}>ー</button>
          
        </div>
      );
    }
  }

  export default Sample;
  