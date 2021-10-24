 import React from 'react';
//state를 사용하기 위해 class 형식의 component를 만든다. 
//이 때 React.Component를 extends 해야 한다. 
//render 함수 안에서 jsx를 리턴해줘야 한다. 
class App extends React.Component{
  state={
    count:0,
  };

  add = ()=>{
    //setState에 새 state가 전달되면 state가 업데이트도니 후 render이 다시 재실행되면서 화면이 업데이트된다. 이 때, 새로운 state만 업데이트됨. 
    //this.setState({count:this.state.count+1})
    //current에는 현재 state가 넘어온다. 
    this.setState(current => ({
      count:current.count +1
    }))
  }
  minus = ()=>{
    this.setState({
      count:this.state.count-1
    });
  }

  render() {
    return (
      <div>
        <h1>I am a class component!</h1>
        <p>The number is : {this.state.count}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default App;

