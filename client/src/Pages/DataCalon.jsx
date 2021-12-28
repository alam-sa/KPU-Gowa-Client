import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import ProfilCalon from '../components/ProfilCalon'

const DataCalon = () => {
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
          data.Dapil ? 
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">{data.StatusCaleg.id === 4 ? "Data Diri Calon  Anggota Legislatif" : "Data Diri Bakal Calon Anggota Legislatif"}</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink to="/verifikasi">Verifikasi</NavLink></li>
                        <li className="breadcrumb-item active">Caleg</li>
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
                            <div className="card-header">
                            <div>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Data Diri</a>
                                    </li>
                                </ul>
                            </div>

                            </div>
                            <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <ProfilCalon 
                                        caleg={data}
                                        dapil={dapil}
                                        parpol={parpol} 
                                      />
                                    </div>
                                    {/* <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                                      <Berkas caleg={data} />
                                    </div> */}
                                </div>
                                

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

export default DataCalon
