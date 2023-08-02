import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './Homescreen';
import Fibonacci from './Fibonacci';

function App() {
  return (
    <BrowserRouter>
     <Routes> 
     <Route path='/' element={<Homescreen/>} />
      <Route path='/fibNumbers'element={<Fibonacci/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
