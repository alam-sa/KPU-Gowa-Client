import React from "react";
import ListPartai from "../components/TablePartai";
import FormPartai from "../components/FormPartai";
import { NavLink } from "react-router-dom";
import TambahUserParpol from "./TambahUserParpol";

const TambahPartai = () => {

  return (
    <React.Fragment>
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Partai Politik</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink to="/partai">Master Data</NavLink></li>
                        <li className="breadcrumb-item active">Parpol</li>
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
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Daftar Parpol</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="documents-tab" data-toggle="tab" href="#documents" role="tab" aria-controls="documents" aria-selected="false">Tambah Parpol</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="users-tab" data-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Tambah Admin Parpol</a>
                                    </li>
                                </ul>
                            </div>

                            </div>
                            <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                      <ListPartai />
                                    </div>
                                    <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                                      <FormPartai />
                                    </div>
                                    <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                                      <TambahUserParpol />
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

export default TambahPartai