import { Navigate,Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import DaftarCaleg from './Pages/DaftarCaleg';
import DaftarBacaleg from './Pages/DaftarBacaleg';
import Verifikasi from './Pages/Verifikasi';
import DaftarAdminKPU from './Pages/DaftarAdminKPU';
import TambahUser from './Pages/TambahUser';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav';
import DetailCalon from './Pages/DetailCalon';
import ProfilCalon from './components/ProfilCalon';
import TambahDapil from './Pages/TambahDapil';
import TambahPartai from './Pages/TambahPartai';
import DataCalon from './Pages/DataCalon';

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? (
      <>
        <Header />
        <SideNav />
        <Outlet />
      </>
    ) : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Home /> },
      { path: '/caleg', element: <DaftarCaleg /> },
      { path: '/bacaleg', element: <DaftarBacaleg /> },
      { path: '/detail', element: <DataCalon /> },
      { path: '/dapil', element: <TambahDapil /> },
      { path: '/partai', element: <TambahPartai /> },
      { path: 'verifikasi/user', element: <DetailCalon /> },,
      {
        path: 'verifikasi',
        element: <Verifikasi />,
        // children: [
        //   { path: 'user/:id', element: <DetailCalon /> },
        // ],
      },
      // {
      //   path: 'verifikasi/user/:id', element: <DetailCalon /> },
      // },
      { path: '/pengguna/tambah', element: <TambahUser /> },
      { path: '/pengguna/list', element: <DaftarAdminKPU /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Login /> : <Navigate to="/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;