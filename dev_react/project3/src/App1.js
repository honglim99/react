import './App.css';

function App() {
  let display = 'on'
  // const pStyle = {
  //   backgroundColor:'yellow',
  //   color:'blue'
  // }
  return (
    <div className="App">
      {
        display === 'on'?
        (
        <div>
          <h1 className='h1Style'>안녕하세요</h1>
          <p className='pStyle'>잘지내시죠?</p>
          <button>버튼</button>
        </div>
        ):
        (
        <div>
          <h1>아메리카노</h1>
          <p className='pStyle'>준비중입니다.</p>
        </div>
        )
      }
    </div>
  );
}

export default App;
