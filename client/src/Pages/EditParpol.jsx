import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import EditPartai from '../components/EditPartai'

const DetailCalon = () => {
  const location = useLocation();
  console.log(location, "PROPS>>>>>>>>");

  const { data } = location.state
  const { parpol } = useSelector((state) => state.parpol)
  const { dapil } = useSelector((state) => state.dapil)

  
  useEffect(() => {
  },[])

  useEffect(() => {

  },[data])
    return (
      <React.Fragment>
        {
          data ? 
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">EDIT PARTAI POLITIK</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink to="/partai">Parpol</NavLink></li>
                        <li className="breadcrumb-item active">Edit</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-body">
                            
                                <EditPartai 
                                  partai={data}
                                />

                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
        : null
        }
          
        <Outlet />
      </React.Fragment>
    )
}

export default DetailCalon
