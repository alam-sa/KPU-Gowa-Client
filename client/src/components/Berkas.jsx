import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const Berkas = () => {
//   const [ legal, setLegal ]= useState({
//     ktp: '',
//     npwp: '',
//     akta_pendirian: '',
//     akta_perubahan_terakhir: '',
//     skt: '',
//     sppkp: '',
//     siup: '',
//     tdp: '',
//     keterangan_domisili: '',
//     nib: ''
// });
// function postUpload(event) {
//   const name = event.target.name
//   const formData = new FormData();
//   formData.append('file', event.target.files[0]);
//   formData.append("upload_preset", "product_picture");
  
// }
const location = useLocation()
const { data } = location.state

console.log(data, ">>>>>>>>>>>>>>>>>>");

function openInNewTab(url) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
  
  return (
    <div className='container-fluid'> 
    <div className='p-4 ' >    
        <div className="" >
            {/* <div className='form-group'>
                <label className=' mt-2'>Kartu Tanda Penduduk</label>
                <input type="file" className={data.Dokumen.ktp ? 'd-none' : 'form-control'} placeholder='Masukkan Refferal Code' id='ktp' name='ktp' defaultValue={data.Dokumen.ktp} onChange={(e) => (e)}  accept=".jpg, .jpeg, .png, .pdf"/>
                {data.Dokumen.ktp? 
                    <>
                        <div className='d-flex '>
                            <div className='mx-1' style={{minWidth:"150px", width:"150px"}}>     
                                <div className='d-flex flex-column'  >
                                    <img src={data.Dokumen.ktp} alt='' style={{minWidth:"150px", backgroundSize:"cover"}} height="150px" width="150px" onClick={() => openInNewTab(data.Dokumen.ktp)} />
                                    
                                    <label className='btn elefin-primary text-white form-control' htmlFor={'ktp'} >Ubah File</label>
                                    
                                </div>
                            </div>  
                            
                        </div>
                    </>
                :null }
            </div>
                         */}
            
        </div>
    </div>
</div>
  )
}

export default Berkas
