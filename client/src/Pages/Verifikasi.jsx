import React, { useEffect } from "react";
import Table from "../components/DataTable";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCalegValidate } from "../store/action";

const Verifikasi = () => {

  const { validate } = useSelector(state => state.caleg)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCalegValidate())
  },[])
  useEffect(() => {

  },[validate])
  return (
    <React.Fragment>
      <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Verifikasi Calon Anggota Legislatif</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink to="/dashboard">Verifikasi</NavLink></li>
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
                        <div className="card-body">
                            <Table calegs={validate} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
        <Outlet />
    </React.Fragment>
  )
}

export default Verifikasi