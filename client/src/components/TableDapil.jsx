import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { getDapils } from "../store/action";
import axios from '../api/config';
import { toast } from 'react-toastify';

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
    cell: (data) => <button className='btn btn-sm btn-danger' onClick={(e) => delDapil(e, data.id)} ><i className='fas fa-trash mr-1'></i>delete</button> ,
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
    function delDapil(event, id) {
      axios({
        url: `dapil/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        toast.success(data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(getDapils())
      })
      .catch(err => {
      console.log(err);
      toast.error("Gagal Menghapus Dapil!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
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