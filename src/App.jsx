import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutMore from './pages/AboutMore';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='aboutmore' element={<AboutMore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
