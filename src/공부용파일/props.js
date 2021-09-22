import React from 'react';
import propTypes from 'prop-types';
//컴포넌트를 안에 만들 수도 있다.
//props 값은 props라는 인자로 전달해서 사용, { }로 전달된다. 
//또는 destructuring 을 사용하여 {fav } 와 같이 전달한다.
function Food({name, image, rating}){
  //props값을 출력하려면 { }안에 넣는다. 
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image} alt={name}/>
      <h4>{rating} / 100</h4>
    </div>
  );
}
//prop-types로 전달받는 props의 type을 검사
const foodILike = [
  {
    id:1,
    name:"1",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tGs88AchfHk6C6x_2a_kfwHaHa%26pid%3DApi&f=1",
    rating:100
  },
  {
    id:2,
    name:"2",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rH2U0aT8sSPcL8sEyAii1QHaLL%26pid%3DApi&f=1",
    rating:99
  }
];

// function renderFood(dish){
//   return <Food name={dish.name} image={dish.image}/>
// };

//const renderFood = dish => <Food name={dish.name} image={dish.image}/>;

function App() {  
  return (
    <div>      
      {foodILike.map(dish => (
        <Food name={dish.name} image={dish.image} key={dish.id} rating={dish.rating}/>
      ))}
    </div>
  );    
}

Food.propTypes={
  name:propTypes.string.isRequired,
  image:propTypes.string.isRequired,
  rating:propTypes.number,
}

//props에 있는 데이터는 문자열을 제외하고 중괄호로 감싸야 한다.
export default App;

