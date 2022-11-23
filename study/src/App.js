import logo from './logo.svg';
import './App.css';

function App() {

  let postTtl = 'React Study';

  return (
    <div className="App">
      {/* jsx : js에서 html을 쓰기위한 문법 */}
      <div className="nav">
        <h2 className="ttl">dada's Blog</h2>
      </div>
      <h3 className="post-ttl">{ postTtl }</h3>
    </div>
  );
}

export default App;
