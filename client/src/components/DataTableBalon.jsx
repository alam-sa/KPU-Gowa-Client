import React, { useEffect, useState } from "react";
import DataTable, { memoize } from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCalegRegistered } from "../store/action";
import moment from 'moment'

var idLocale = require('moment/locale/id'); 
moment.locale('id', idLocale);


const columns = [
    {
      name: 'FOTO',
      width: '12rem',
      cell: (data) => <React.Fragment>
      {data.foto_profil ?
          <img className='mx-1' src={data.foto_profil} width="50" height="50" alt="" />
      : 
          <img className='mx-1' src={'avatar.jpg'} width="50" height="50" alt="Foto" />
      }
      </React.Fragment> ,
      ignoreRowClick: false,
      allowOverflow: true,
      button: true,
    },
    {
        name: 'TANGGAL DAFTAR',
        selector: row => `${moment(row.createdAt).format("dddd")}, ${moment(row.createdAt).format("DD/MM/YYYY")}`,
        sortable: true,
    },
    {
        name: 'NIK',
        selector: row => row.NIK,
        sortable: true,
    },
    {
        name: 'Nama Calon',
        selector: row => row.nama,
        sortable: true,
    },
    {
      name: 'Asal Partai',
      selector: row => row.Partai.nama_partai,
      sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.StatusCaleg.nama_status,
        sortable: true,
    },
    {
        cell: (data) => <button className='btn btn-sm btn-info'><i className='fas fa-info mr-1'></i><Link to="/detail" state={{data: data}} ProfilCalon style={{color: '#fff'}} className="link-success">Detail</Link></button> ,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
];


const TableBalon = () => {
    const [tableData, setTableData] = useState([])

    const { register, loading } = useSelector(state => state.caleg)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCalegRegistered())
    }, [])

    useEffect(() => {
       setTableData(register)
    }, [register])

    useEffect(() => {

},[tableData])


    function filteredItems(data, filterText) {
        return data.filter((item) => {
            return  item.title && item.title.toLowerCase().includes(filterText.toLowerCase()) || item.partai && item.partai.toLowerCase().includes(filterText.toLowerCase())
        })
    }
    function filter(event) {
        if (event === '') {
            setTableData(register)
        } else {
            setTableData(filteredItems(register, event))
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
            <DataTable
                columns={columns}
                data={tableData}
                pagination
                highlightOnHover
            />
        </React.Fragment>
    );
};

export default TableBalon