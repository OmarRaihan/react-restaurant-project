import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Restaurant></Restaurant>}></Route>
        <Route path="/MealDetail/:details" element={<MealDetail></MealDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
