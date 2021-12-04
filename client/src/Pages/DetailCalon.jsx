import React from 'react'
import { NavLink } from 'react-router-dom'
import Berkas from '../components/Berkas'
import ProfilCalon from '../components/ProfilCalon'


const DetailCalon = () => {
    return (
      <React.Fragment>
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Verifikasi Bakal Calon Anggota Legislatif</h1>
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
                                    <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="documents-tab" data-toggle="tab" href="#documents" role="tab" aria-controls="documents" aria-selected="false">Berkas</a>
                                    </li>
                                </ul>
                            </div>

                            </div>
                            <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                      <ProfilCalon />
                                    </div>
                                    <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                                      <Berkas />
                                    </div>
                                </div>
                                

                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
        
      </React.Fragment>
    )
}

export default DetailCalon
