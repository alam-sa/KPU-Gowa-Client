import React, { useEffect, useState } from "react";
import DataTable, { memoize } from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { deleteUser, getDapils, updateActiveUser } from "../store/action";

const TableDapil = () => {
  const {dapils, loading } = useSelector(state => state.dapil)
  const [fetchData, setFetchData] = useState([])
  const [tableData, setTableData] = useState([])

  const dispatch = useDispatch()


useEffect(() => {
    dispatch(getDapils())
    setFetchData(dapils)
    setTableData(dapils)
}, [])


useEffect(() => {
  setTableData(dapils)
  setFetchData(dapils)
},[dapils])

useEffect(() => {
  setTableData(fetchData)
},[fetchData])

const columns = [
  {
      name: 'NAMA DAPIL',
      selector: row => row.nama_dapil
  },
  
  {
      name: 'WILAYAH DAPIL',
      selector: row => row.wilayah_dapil,
      sortable: true,
  },
  {
    name: 'JUMLAH KURSI',
    selector: row => row.jumlah_kursi,
    sortable: true,
},
  {
    cell: (data) => <button className='btn btn-sm btn-danger' onClick={(e) => dispatch(deleteUser(data.id))} ><i className='fas fa-trash mr-1'></i>delete</button> ,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

    function filteredItems(data, filterText) {
        return data.filter((item) => {
            return  item.email && item.nama_dapil.toLowerCase().includes(filterText.toLowerCase()) || item.wilayah_dapil && item.wilayah_dapil.toLowerCase().includes(filterText.toLowerCase())
        })
    }
    function filter(event) {
        if (event === '') {
            setTableData(dapils)
        } else {
            setTableData(filteredItems(fetchData, event))
        }
    }
    

    return (
        <React.Fragment>
            <div className="col-md-4">
                <div className="input-group ">
                    <input type="text" className="form-control" placeholder='Cari Data' onChange={(e) => filter(e.target.value)} />
                    <div className="input-group-append">
                        <span className="input-group-text" ><i className="fas fa-search" ></i></span>
                    </div>
                </div>
            </div>
            {
              loading ? <h1>Loading...</h1> :
              <DataTable
                  columns={columns}
                  data={tableData}
                  pagination
                  highlightOnHover
              />
            }
        </React.Fragment>
    );
};

export default TableDapil