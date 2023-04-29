import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Catalog } from './component/Catalog/Catalog';
import { HomePage } from './component/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
