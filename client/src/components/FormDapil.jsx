import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import { getDapils, getDistricts } from "../store/action";
import axios from '../api/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

 const FormDapil =() => {
  const [data, setData] = useState('')
  const { subdistricts } = useSelector((state) => state.region);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getDistricts('city', 'Gowa'))
  }, [])

  useEffect(() => {
    
  }, [data])

function handleInput(event) {
  let name = event.target.name
  let value = event.target.value
  if (name === 'jumlah_kursi' || name === 'total_pemilih') {
    value = +value
  }
 setData({
  ...data,
  [name]: value
})
}

function handleWilayah(selected) {
  // console.log(selected);
  let temp = 'KECAMATAN '
  selected.forEach(el => {
    temp += el.value + ', '
  })
  setData({
    ...data,
    wilayah_dapil: temp.slice(0, -2)
  })
}

function handleSubmit(event) {
  // event.preventDefault()
  const payload = data
  
    axios({
      url: `dapil`,
      method: 'POST',
      data: payload,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(_ => {
      setData('')
      dispatch(getDapils())
      toast.success("Berhasil Menambah Dapil!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(err => {
    console.log(err);
    toast.error("Gagal Menambah Dapil!", {
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
    
    return(
        <React.Fragment>
         <div>
            <div className="mb-3">
              <label htmlFor="nama_dapil" className="form-label">Nama Dapil</label>
              <input type="text" name="nama_dapil" className="form-control" id="nama_dapil" aria-describedby="nama_dapil" placeholder="Masukkan Nama Dapil" onChange={(e) => handleInput(e)} />
            </div>
            <label htmlFor="district">Wilayah Dapil</label>
            <Select
                name="wilayah_dapil"
                // defaultValue={data.wilayah_dapil}
                isMulti
                className="mb-3 basic-multi-select"
                classNamePrefix="select"
                options={subdistricts}
                placeholder="Pilih Kecamatan"
                onChange={handleWilayah}
            />
            <div className="mb-3">
              <label htmlFor="jumlah_kursi" className="form-label">Jumlah Kursi</label>
              <input type="number" name="jumlah_kursi" className="form-control" id="jumlah_kursi" aria-describedby="jumlah_kursi" placeholder="Masukkan Jumlah Kursi" onChange={(e) => handleInput(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="total_pemilih" className="form-label">Total Pemilih</label>
              <input type="number" name="total_pemilih" className="form-control" id="total_pemilih" aria-describedby="total_pemilih" placeholder="Masukkan Total Pemilih" onChange={(e) => handleInput(e)} />
            </div>
            
            <button type="button" className="btn btn-primary" style={{float: "right"}} onClick={(e)=>handleSubmit(e)} >Tambah Dapil</button>
          </div>

              
        </React.Fragment>
    )
}

export default FormDapil