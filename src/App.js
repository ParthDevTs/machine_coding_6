
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ResturantDetailPage from './pages/ResturantDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resturant/:restId' element={<ResturantDetailPage />}></Route>
      </Routes>
    </div>
  );
}


export default App;
