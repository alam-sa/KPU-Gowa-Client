import routes from './routes';
import { useRoutes } from 'react-router-dom';
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