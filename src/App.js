
import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className='mx-auto flex flex-col justify-center items-center h-[100vh]'>
      <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    </div>
  );
}

export default App;
