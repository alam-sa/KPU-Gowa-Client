import React, { useEffect, useState } from "react";
import DataTable, { memoize } from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCalegValidate } from "../store/action";
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
        name: 'NAMA CALON',
        selector: row => row.nama,
        sortable: true,
    },
    {
      name: 'ASAL PARTAI',
      selector: row => row.Partai.nama_partai,
      sortable: true,
    },
    {
        name: 'VALIDASI',
        selector: row => row.StatusCaleg.nama_status,
        sortable: true,
    },
    {
        cell: (data) => <button className='btn btn-sm btn-info'><i className='fas fa-info mr-1'></i><Link to="/detail" state={{data: data}} style={{color: '#fff'}} className="link-success">Detail</Link></button> ,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {
        cell: (data) => data.StatusCaleg.id === 4 ? <></> : <button className='btn btn-sm btn-success'><i className='fas fa-edit mr-1'></i><Link to='user' state={{data: data}} style={{color: '#fff'}} className="link-success">Verifikasi</Link></button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];


const Table = ({calegs}) => {
    const [tableData, setTableData] = useState([])
    const { validate, loading } = useSelector(state => state.caleg)

  const dispatch = useDispatch();


  // useEffect(() => {
  //     dispatch(getCalegValidate())
  // }, [])

  useEffect(() => {
    setTableData(calegs)
  },[calegs])


    function filteredItems(data, filterText) {
        return data.filter((item) => {
            return  item.title && item.title.toLowerCase().includes(filterText.toLowerCase()) || item.partai && item.partai.toLowerCase().includes(filterText.toLowerCase())
        })
    }
    function filter(event) {
        if (event === '') {
            setTableData(validate)
        } else {
            setTableData(filteredItems(validate, event))
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

export default Table