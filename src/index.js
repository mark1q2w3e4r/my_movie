import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render( // render는 한번에 하나밖에 할 수 없음... 그렇기에 모든 것을 <App /> 안에 때려넣는 작업이 필요함
    <App />, document.getElementById('root') // react는 자바스크립트를 html처럼 동작할 수 있게끔 해주는 친구. 이를 JSX 라고 부름
);

