import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //App component를 import해서 사용


//component를 사용하고자 할 때의 형태 : jsx (javascript + html)
ReactDOM.render(<App />, document.getElementById('root')); //App.js파일에 작성한 코드를 index.html의 id가 root인 element에 넣어 준다.
//react는 최종적으로 1개의 component를 그려야 한다. 
