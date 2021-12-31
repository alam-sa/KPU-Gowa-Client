import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addParpols, updateParpol } from "../store/action";
import axios from "../api/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

 const EditPartai =({partai}) => {

  const [data, setData] = useState({
    nama_partai: partai.nama_partai,
    nomor_urut: partai.nomor_urut,
    logo: partai.logo,
    visi_misi: partai.visi_misi
  })
  const [tempLogo, setTempLogo] = useState(partai.logo)
  const [selectedFile, setSelectedFile] = useState();
  const [errorUpload, setErrorUpload] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
   
  }, [partai])

  useEffect(() => {
    // setData({
    //   nama_partai: '',
    //   nomor_urut: 0,
    //   logo: '',
    //   visi_misi: ''
    // })
  }, [data])

function handleName(event) {
  event.preventDefault();
 setData({
   ...data,
   nama_partai: event.target.value
 })
}

function handleNoUrut(event) {
  event.preventDefault();
  setData({
    ...data,
    nomor_urut: +event.target.value
  })
  // console.log(event.target.value);
}

function handleVisiMisi(event) {
  event.preventDefault();
  setData({
    ...data,
    visi_misi: event.target.value
  })
  // console.log(event.target.value);
 }

 function handleUploadLogo(event) {
   setSelectedFile(event.target.files[0])
   const objectUrl = URL.createObjectURL(event.target.files[0])
   setTempLogo(objectUrl)
 }

function handleSubmit() {
  const logo = new FormData();
  logo.append('logo', selectedFile);
  if (selectedFile) {
    axios({
      url: `partai/logo/upload`,
      method: 'POST',
      data: logo,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then((res) => {
      let logoPartai = res.data.logo
      const payload = {
        nama_partai: data.nama_partai,
        nomor_urut: data.nomor_urut,
        logo: logoPartai,
        visi_misi: data.visi_misi
      }
      dispatch(updateParpol(payload, partai.id))
      toast.success("sukses upload", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    setData({
      nama_partai: '',
      nomor_urut: 0,
      logo: '',
      visi_misi: ''
    });
    navigate('/partai')
    }).catch(err => {
      setErrorUpload(true)
      toast.error("Gagal Upload", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
      console.log(err);
    })
  } else {
    const payload = {
      nama_partai: data.nama_partai,
      nomor_urut: data.nomor_urut,
      logo: data.logo,
      visi_misi: data.visi_misi
    }
    dispatch(updateParpol(payload, partai.id))
    setData({
      nama_partai: '',
      nomor_urut: 0,
      logo: '',
      visi_misi: ''
    });
    
    navigate('/partai')
  }
  
  
}
    
    return(
        <React.Fragment>
         <div>
          <div className='card mb-3' style={{width:"150px", height:"150px", minWidth:'150px'}}>
          <input type="file" className='d-none' id='logo' accept="image/png, image/jpg, image/jpeg" onChange={(e) => handleUploadLogo(e)} />
                  <img src={data.logo ? `${tempLogo}` : "avatar.jpg"} height="150px"  width="150px" alt="" htmlFor={'logo'} />
            </div>
            <div className='mb-3'>
                {/* <p className='w-50'>Ukuran optimal 225 x 330 pixel dengan Besar file: Maksimum 500.000 bytes (500 Kb). Ekstensi file yang diperbolehkan: JPG, JPEG </p> */}
                <label className='btn w-40 btn-outline-primary' htmlFor='logo'>Ubah Logo
                </label>
            </div>
            <div className="mb-3">
              <label htmlFor="nama-partai" className="form-label">Nama Partai</label>
              <input type="text" className="form-control" id="nama-partai" placeholder="Masukkan Nama Partai" onChange={(e) => handleName(e)} value={data.nama_partai} />
            </div>
            <div className="mb-3">
              <label htmlFor="no-urut" className="form-label">Nomor Urut</label>
              <input type='number' className="form-control" id="no-urut" placeholder="Masukkan No. Urut" onChange={(e) => handleNoUrut(e)} value={data.nomor_urut} />
            </div>
            
            <div className="mb-3">
              <label htmlFor="visi-misi" className="form-label">Visi - Misi</label>
              <textarea rows={20} className="form-control" id="visi-misi" placeholder="Masukkan Visi Misi Partai" onChange={(e) => handleVisiMisi(e)} value={data.visi_misi} />
            </div>
            <button type="submit" className="btn btn-primary" style={{float: "right"}} onClick={handleSubmit} >Edit Partai</button>
          </div>

              
        </React.Fragment>
    )
}

export default EditPartai