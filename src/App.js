import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ReservationPage from './pages/Reservation';
import UnderConstructionPage from './pages/UnderConstruction';
import ConfirmationPage from './pages/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<UnderConstructionPage title={"Menu"} />} />
        <Route path='/about' element={<UnderConstructionPage title={"About us"} />} />
        <Route path='/reservations' element={<ReservationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
