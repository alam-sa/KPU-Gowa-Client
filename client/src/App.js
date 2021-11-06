import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import DaftarCaleg from './Pages/DaftarCaleg';
import DaftarBacaleg from './Pages/DaftarBacaleg';
import Verifikasi from './Pages/Verifikasi';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Table from './components/DataTable';

function App() {
  return (
    <>
      <Header />
      <SideNav />
      {/* <Router> */}
        <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/caleg" element={<DaftarCaleg />} />
            <Route path="/bacaleg" element={<DaftarBacaleg />} />
            <Route path="/verifikasi" element={<Verifikasi />} />
            <Route path="/" element={<Home />} />
        </Routes>
      {/* </Router> */}
      <Footer />
    </>
  );
}

export default App;
