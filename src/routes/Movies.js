import axios from 'axios';
import React from 'react';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
  state = {
    //loading중일 때의 상태를 관리할 값
    isLoading:true,
    movies:[],
  }

  getMovies = async() => {//구조 분해 할당
    const {
      data:{
        data:{ movies },
      },
    }
    //network를 사용해서 가져와야 하므로 자바스크립트에게 시간이 걸리는 작업이라고 알려줘야 한다. async: 함수의 ()앞에 붙이기(비동기라고 알려주기), await:시간이 필요한 대상 앞에 붙이기
    = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //키와 변수의 이름이 같다면 축약가능. movies:movies
    this.setState({movies, isLoading:false});
  }

  //app component가 그려지면 호출되는 함수
  componentDidMount(){
    //영화 데이터 로딩
    this.getMovies();
  }

  render() {
    //구조 분해 할당으로 미리 this.state를 넣어놓기
    const {isLoading, movies} = this.state;
    //html의 class와 jsx(javascript)의 class가 겹치므로 다르게 사용(className, htmlFor)
    return (
      <section className="container">
        {isLoading ? 
          (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ):(
          <div className="movies">
          {movies.map((movie)=>{
            return (<Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}/>);
          })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

