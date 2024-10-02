import './App.css';
import Menu from './components/Menu';
import Menuoff from './components/Menuoff'

function App() {
  let display = 'off';

  return (
    <div className="App">
      {
        display === 'on'?
        (<Menu />):
        (<Menuoff />)
      }
    </div>
  );
}

export default App;
