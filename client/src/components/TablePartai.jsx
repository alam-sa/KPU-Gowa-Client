import React, { useEffect, useState } from "react";
import DataTable, { memoize } from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { deleteParpol, getAllParpol, getParpols } from "../store/action";
import moment from 'moment'
import { Link } from "react-router-dom";

var idLocale = require('moment/locale/id'); 
  moment.locale('id', idLocale);

const TablePartai = () => {
  const {allParpol, loading } = useSelector(state => state.parpol)
  const [fetchData, setFetchData] = useState([])
  const [tableData, setTableData] = useState([])

  const dispatch = useDispatch()


useEffect(() => {
    dispatch(getAllParpol())
    setFetchData(allParpol)
    setTableData(allParpol)
}, [])


useEffect(() => {
  setTableData(allParpol)
  setFetchData(allParpol)
  console.log(allParpol);
},[allParpol])

useEffect(() => {
  setTableData(fetchData)
},[fetchData])

const columns = [
  {
      name: 'Logo Partai',
      selector: row => <img src={row.logo} alt="Logo" className="logo p-2" style={{height: '80px', width: '80px'}} />
  },
  {
      name: 'Nama Partai',
      selector: row => row.nama_partai,
      sortable: true,
  },
  {
    name: 'Nomor Urut',
    selector: row => row.nomor_urut,
    sortable: true,
},
  {
    name: 'Tanggal Terdaftar',
    selector: row => `${moment(row.createdAt).format("dddd")}, ${moment(row.createdAt).format("DD/MM/YYYY")}`,
    sortable: true,
  },
  {
    cell: (data) => <button className='btn btn-sm btn-primary' onClick={(e) => console.log(data)} ><i className='fas fa-edit mr-1'></i><Link to="/partai/edit" state={{data: data}} style={{color: '#fff'}} className="link-danger">Edit</Link></button> ,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    cell: (data) => <button className='btn btn-sm btn-danger' onClick={(e) => dispatch(deleteParpol(data.id))} ><i className='fas fa-trash mr-1'></i>delete</button> ,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

    function filteredItems(data, filterText) {
        return data.filter((item) => {
            return  item.email && item.email.toLowerCase().includes(filterText.toLowerCase()) || item.UserLevel.user_level && item.UserLevel.user_level.toLowerCase().includes(filterText.toLowerCase())
        })
    }
    function filter(event) {
        if (event === '') {
            setTableData(allParpol)
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

export default TablePartai