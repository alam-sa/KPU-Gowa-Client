import React from "react";
import AddUserParpol from "../components/AddUserParpol";
import { NavLink, Outlet } from "react-router-dom";

const TambahUserParpol = () => {

  return (
    <React.Fragment>
        {/* <div className="content-wrapper"> */}
            {/* Content Header (Page header) */}
            
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <AddUserParpol />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        {/* </div> */}

        {/* <Outlet /> */}
    </React.Fragment>
  )
}

export default TambahUserParpol