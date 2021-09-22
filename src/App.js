import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

//router는 /, /home, /home/introduction순서로 path props가 있는지 찾기 때문에 /home/introduction으로 접속하면 /home, /home/introduction모두가 그려진다. => 이를 방지하기 위해 excat props를 추가한다.
//Link, Router 컴포넌트는 반드시 HashRouter안에 포함되어야 한다. 
class App extends React.Component{
  render() {    
    return (
      <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail}/>
      </HashRouter>
    );
  }
}

export default App;

