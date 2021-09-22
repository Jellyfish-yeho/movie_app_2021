import React from 'react';
//state를 사용하기 위해 class 형식의 component를 만든다. 
//이 때 React.Component를 extends 해야 한다. 
//render 함수 안에서 jsx를 리턴해줘야 한다. 
class App extends React.Component{
  state={
    count:0,
  };
  //constructor 가 render보다 먼저 실행된다
  constructor(props){
    super(props);
    console.log("hi");
  }
  //render 이 완료된 후 componentDidMounted가 실행된다. 
  //component가 처음 화면에 그려지면 실행되는 함수이다. 
  componentDidMount(){
    console.log("component rendered")
  }
  //componentDidUpdate는 화면이 업데이트되면(새로그려지면) 실행됨
  componentDidUpdate(){
    console.log("updated!");
  }
  //componentWillUnmount 는 컴포넌트가 화면에서 떠날 때 실행됨
  componentWillUnmount(){
    console.log("unmounted!")
  }

  add = ()=>{
    this.setState(current => ({
      count:current.count +1
    }))
  }
  minus = ()=>{
    this.setState({
      count:this.state.count-1
    });
  }
  //순서 : constructor > render > componentDidMount / componentDidUpdate
  render() {
    console.log("rendering...");
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

