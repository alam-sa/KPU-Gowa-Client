// import './App.css';


// import { Routes, Route, useRoutes } from "react-router-dom";
// import Home from './Pages/Home';
// import DaftarCaleg from './Pages/DaftarCaleg';
// import DaftarBacaleg from './Pages/DaftarBacaleg';
// import Verifikasi from './Pages/Verifikasi';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import SideNav from './components/SideNav';
// import DetailCalon from './Pages/DetailCalon';
// import ProfilCalon from './components/ProfilCalon';
// import { ToastContainer } from 'react-toastify';

// function App() {
//   return (
//     <>
//       <Header />
//       <SideNav />
//       {/* <Router> */}
//         <Routes>
//             <Route exact path="/dashboard" element={<Home />} />
//             <Route exact path="/caleg" element={<DaftarCaleg />} />
//             <Route exact path="/bacaleg" element={<DaftarBacaleg />} />
//             <Route exact path="/verifikasi/" element={<Verifikasi />} >
//             </Route>
//               <Route path="verifikasi/id" element={<DetailCalon />} />
//             <Route exact path="/" element={<Home />} />
//         </Routes>
//       {/* </Router> */}
//       <Footer />
//       <ToastContainer/>
//     </>
//   );
// }

// export default App;

import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import React from 'react';

function App() {

  const routing = useRoutes(routes(localStorage.getItem('access_token')));

  return (
    <React.Fragment>
      <>
        {routing}
      </>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;