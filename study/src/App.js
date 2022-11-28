import './App.css';
import { useState } from 'react'

function App() {

  {/* state : 정보 보관, 값이 변경되면 html이 자동으로 재렌더링 됨 */}
  // let [변수이름, 변경함수] = useState[값]
  let [subTtl, titleChange] = useState(['리액트 공부', 'React', 'Javascript']);
  let [like, likeChange] = useState(0);

  let titleHandler = ()=>{
    let copyTitle = [...subTtl];
    copyTitle[0] = '자바스크립트';
    titleChange(copyTitle)
  };

  return (
    <div className="App">
      {/* jsx : js에서 html을 쓰기위한 문법 */}
      {/* onClick : 안에 함수를 실행해야 잘 실행됨 */}
      {/* state를 변경할땐 변경함수를 사용해야한다 */}

      <div className="nav">
        <h2 className="ttl">dada's Blog</h2>
      </div>
      <div className="list">
        <h3>{ subTtl[0] } <span onClick={ ()=>{likeChange(like + 1)} }>👍</span> {like}</h3>
        <button onClick={ titleHandler }>Change</button>
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
