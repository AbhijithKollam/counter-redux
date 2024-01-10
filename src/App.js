import './App.css';
import Counter1 from './components/Counter1';

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:"100vh"}}>
      <div className="d-flex align-items-center justify-content-center flex-column p-5 rounded" style={{backgroundColor:"white"}}>
        <Counter1/>
      </div>
    </div>
  );
}

export default App;
