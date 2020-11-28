import React from 'react';
import PropTypes from 'prop-types';
//import Potato from './Potato';
//import Americano from './Americano';

function Food(props){
  return(
    <div>
      <h1>I like { props.name }</h1>
  <h3>{props.rating}/5.0</h3>
      <img src={ props.imgsrc } style={{width:"300px", height:"300px"}} alt={props.name} />
    </div>
  )
}

const foodILike = [
  
  {
    id: 1,
    name:"kimchi",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontents.sixshop.com%2Fthumbnails%2FuploadedFiles%2F72878%2Fproduct%2Fimage_1540176020065_1000.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id: 2,
    name:"samgyobsal",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2Fcomponent%2Fhtmlphoto_mmdata%2F201702%2F27%2F117f5b49-1d09-4550-8ab7-87c0d82614de.jpg&f=1&nofb=1",
    rating: 4.3
  },
  {
    id: 3,
    name:"cheeze",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%253A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F99BC07495D72692F09&f=1&nofb=1",
    rating: 3.8
  },
  {
    id: 4,
    name:"melon",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Fblog%2F265FF84D569BD71905&f=1&nofb=1",
    rating: 4.7
  },
  {
    id: 5,
    name:"gimbop",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FnZbBbva_0pE%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4
  }

];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() { // >> 이것을 컴포넌트라고 부름. 컴포넌트는 html을 반환하는 함수
  return (
    <div>
      { //JavaScript 부분
        foodILike.map(function(dish){ // 각각의 이미지 값에 대해 컴포넌트를 일일히 만들어야하는 부담감을 줄여주는 역할을 하는 친구(map)
           return <Food key={dish.id} name={dish.name} imgsrc={dish.image} rating={dish.rating}/>
        })
      }
    </div>
  );
}

export default App;
