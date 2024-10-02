// import logo from './logo.svg';
import './App.css';

function App() {
  let name='홍길동'
  return (
    <div className="App">
      {name === "코딩쌤"? (<h1>{name}님과 함께하는 즐거운 리액트 수업!!</h1>) :
        (<h1>{name}님과 함께했던 어려운 리액트 수업!!</h1>)
      }

      <h1>Hello, React!!</h1>
      <h1>Welcome, React!!</h1>
      <a href="https://www.naver.com">click</a>
    </div>
  );
}

export default App;
