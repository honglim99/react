import logo from './logo.svg';
import './App.css';

function App() {
  let name="홍길동"
  const name2 = "React";
  const naver = {
    name: "naver",
    url: "https://www.naver.com",
  }
  return (
    <div className="App">
      <h1>안녕하세요!! {name2}</h1>
      <p>{name}</p>
      <h1>{naver.name} 주소 : <a href={naver.url}>{naver.url}</a></h1>
    </div>
  );
}

export default App;
