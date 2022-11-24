import './App.css';
import { useState } from 'react'

function App() {

  {/* state : 정보 보관, 값이 변경되면 html이 자동으로 재렌더링 됨 */}
  let [subTtl, b] = useState(['리액트 공부 자료', 'React', 'Javascript']);
  return (
    <div className="App">
      {/* jsx : js에서 html을 쓰기위한 문법 */}

      <div className="nav">
        <h2 className="ttl">dada's Blog</h2>
      </div>
      <div className="list">
        <h3>{ subTtl[0] }</h3>
        <p>11월 24일 발행</p>
      </div>
      <div className="list">
        <h3>{ subTtl[1] }</h3>
        <p>11월 24일 발행</p>
      </div>
      <div className="list">
        <h3>{ subTtl[2] }</h3>
        <p>11월 24일 발행</p>
      </div>
    </div>
  );
}

export default App;
