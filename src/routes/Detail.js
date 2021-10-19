import React from "react";

//props의 history 에서 url 변경 함수를 사용할 수 있다. 
//직접 주소창에 detail을 입력해서 들어가서 location의 state값이 비어 있는 경우, history를 사용해서 url을 / (home)로 강제 수정한다. 즉, redirect이동.

//render -> componentDidMount 순서대로 함수를 실행하므로 render에도 redirect 코드를 추가해야 한다. 
class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        console.log(location.state);
        if(location.state){
           return (
            <div className="container">
                <img src={location.state.poster} alt=""/>
                <h3 className="movie_title">{location.state.title}</h3>
                <ul>
                    YEAR
                    <li className="movie_year">{location.state.year}</li>
                    GENRE
                    {location.state.genres.map((genre,index)=>{
                        return <li key={index} className="movie_genre">{genre}</li>
                    })}
                    RATING
                    <li className="movie_rating">{location.state.rating}</li>
                    <p className="movie_summary">{location.state.summary}</p>
                </ul>
                <ul>
                    <li>
                        <a href="https://google.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                            </svg>
                            Share
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            Bookmark
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            Recommend
                        </a>
                    </li>
                </ul>
            </div>
           );
        }else{
            return null;
        }
    }
}



export default Detail;