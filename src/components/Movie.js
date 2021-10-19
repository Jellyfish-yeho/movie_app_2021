import React from "react";
import propTypes from "prop-types";
import "./Movie.css"
import {Link} from 'react-router-dom'

//state 가 필요하지 않으므로 함수형으로 작성
//넘어올 영화 데이터를 관리할 prop-types 사용
//slice : string.slice(시작숫자, 끝숫자) 이 때 끝숫자는 포함X
function Movie({title, year, summary, poster, genres}){
    return (
    <div>
        <select name="align">
            <option>High rating</option>
            <option>Latest</option>
            <option>Recommended</option>
        </select>
        <div className="movie">
            <Link to={{
                pathname:'/movie-detail',
                state:{year, title, summary, poster,genres},
            }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre,index)=>{
                            return <li key={index} className="movie__genre">{genre}</li>
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
                </div>
                </Link>
        </div>
    </div>
    );
}

Movie.propTypes={ 
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    //genres는 array이므로 arrayOf(string) 사용
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;