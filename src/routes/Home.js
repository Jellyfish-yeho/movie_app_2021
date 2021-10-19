import React from 'react';
import './Home.css';

class Home extends React.Component{
  state = {

  }

  render() {
    return (
      <div className="container">
        <h1>반갑습니다!</h1> 
        <h3>영화 추천을 받으세요.</h3>
        <form>
          <input type="text" placeholder='이메일을 입력하세요.'/>
          <button type='submit'>가입하기</button>
        </form>
        <hr/>
        <h3>즐기세요.</h3>
        <p>다양한 디바이스에서 즐겨 보세요.</p>
        <hr/>
        <h3>저장하세요.</h3>
        <p>좋아하는 영화를 북마크에 모아 두세요.</p>
        <hr/>
        <h3>추천하세요.</h3>
        <p>영화에 별점과 후기를 남기세요.</p>
      </div>
    );
  }
}

export default Home;

