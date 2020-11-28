import React from 'react';
import PropTypes from 'prop-types';
//import Potato from './Potato';
//import Americano from './Americano';

function Food(props){ // 실질적으로 프론트 단에 뿌려주는 친구. props 인자는 아래에서 html을 구성할때 거기에 속성값을 가져오는 properties들을 의미함
  return(
    <div>
      <h1>I like { props.name }</h1>
      <h3>{props.rating}/5.0</h3>
      <img src={ props.imgsrc } style={{width:"300px", height:"300px"}} alt={props.name} />
    </div>
  )
}

const foodILike = [ // 데이터를 동적으로 여러개 만들기 위한 json 데이터 생성
  
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

Food.propTypes = { // 해당되는 props의 데이터타입을 겁사하여 콘솔로 에러를 찍어주는 라이브러리 기능
  name: PropTypes.string.isRequired, // isRequired 는 필수사항, 없을경우 필수사항이 아닌 해당사항에 대한 검사
  imgsrc: PropTypes.string.isRequired,
  rating: PropTypes.number //isRequired 가 없기때문에 필수사항으로 체크하지 않음
};

function App() { // >> 이것을 컴포넌트라고 부름. 컴포넌트는 html을 반환하는 함수
  return (
    <div>
      { //JavaScript 부분
        foodILike.map(function(dish){ // 각각의 이미지 값에 대해 컴포넌트를 일일히 만들어야하는 부담감을 줄여주는 역할을 하는 친구(map)
           return <Food key={dish.id} name={dish.name} imgsrc={dish.image} rating={dish.rating}/> // 실질적인 데이터
        })
      }
    </div>
  );
}

export default App;
