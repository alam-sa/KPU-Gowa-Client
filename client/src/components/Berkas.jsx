import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../api/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Berkas = ({caleg}) => {
  const { dokumen } = useSelector((state) => state.dokumen);
  const navigate = useNavigate();

  const [ legal, setLegal ]= useState({
    ktp: caleg.Dokumen.ktp,
    bb1: caleg.Dokumen.bb1,
    bb2: caleg.Dokumen.bb2,
    ijazah: caleg.Dokumen.ijazah,
    suket_sehat: caleg.Dokumen.suket_sehat,
    suket_kpu: caleg.Dokumen.suket_kpu,
    skck: caleg.Dokumen.skck,
    kta_parpol: caleg.Dokumen.kta_parpol,
    dokumen_lainnya: caleg.Dokumen.dokumen_lainnya,
    ktp_verified: caleg.Dokumen.ktp_verified,
    bb1_verified: caleg.Dokumen.bb1_verified,
    bb2_verified: caleg.Dokumen.bb2_verified,
    ijazah_verified: caleg.Dokumen.ijazah_verified,
    suket_sehat_verified: caleg.Dokumen.suket_sehat_verified,
    suket_kpu_verified: caleg.Dokumen.suket_kpu_verified,
    skck_verified: caleg.Dokumen.skck_verified,
    kta_parpol_verified: caleg.Dokumen.kta_parpol_verified,
    dokumen_lainnya_verified: caleg.Dokumen.dokumen_lainnya_verified
  });
  useEffect(() => {
    console.log(caleg);
  },[caleg]);
  
  function handlePdf(event) {
    event.preventDefault()
    console.log(event.target.name);
    let file = legal[event.target.name]
    openInNewTab(`http://localhost:3001/pdf/${file}`)
  }

  function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  function handleSubmit() {
    console.log(legal, ">>>>>>>>>>>>>>");
    const payload = {
      ktp_verified: legal.ktp_verified,
      bb1_verified: legal.bb1_verified,
      bb2_verified: legal.bb2_verified,
      ijazah_verified: legal.ijazah_verified,
      suket_sehat_verified: legal.suket_sehat_verified,
      suket_kpu_verified: legal.suket_kpu_verified,
      skck_verified: legal.skck_verified,
      kta_parpol_verified: legal.kta_parpol_verified,
      dokumen_lainnya_verified: legal.dokumen_lainnya_verified
    }
    let status;
    if (Object.keys(payload).every((k) => payload[k])) {
      status = 4
    } else {
      status = 2
    }
    axios({
      method: "PATCH",
      url: `berkas/${caleg.dokumenId}`,
      data: payload,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    }).then(_ => {
      axios({
        url: `caleg/status/${caleg.id}`,
        method: 'PATCH',
        data: {status},
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(_ => {
        navigate("/caleg")
      })
      toast.success("Verifikasi Berkas Berhasil!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch(err => {
      console.log(err);
      toast.error("Verifikasi Berkas Gagal!", {
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
    <div className='container-fluid'>
      <div className='row'>
          <div className='d-flex flex-column col-md-12'>
              <div className='p-4 text-muted card mb-5 h-100'>
                  <div className="d-flex justify-content-center p-5">
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                            <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button onClick={(e) => handlePdf(e)} name="ktp" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>KTP</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button onClick={(e) => setLegal({...legal, ktp_verified: true})} className={legal.ktp_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button onClick={(e) => setLegal({...legal, ktp_verified: false})} className={legal.ktp_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button onClick={(e) => handlePdf(e)} name="bb1" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>BB.1</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button onClick={(e) => setLegal({...legal, bb1_verified: true})} className={legal.bb1_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button onClick={(e) => setLegal({...legal, bb1_verified: false})} className={legal.bb1_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button onClick={(e) => handlePdf(e)} name="bb2" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>BB.2</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button onClick={(e) => setLegal({...legal, bb2_verified: true})} className={legal.bb2_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button onClick={(e) => setLegal({...legal, bb2_verified: false})} className={legal.bb2_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button onClick={(e) => handlePdf(e)} name="ijazah" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Ijazah</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button onClick={(e) => setLegal({...legal, ijazah_verified: true})} className={legal.ijazah_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button onClick={(e) => setLegal({...legal, ijazah_verified: false})} className={legal.ijazah_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button onClick={(e) => handlePdf(e)} name="suket_sehat" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Surat Ket. Sehat</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button onClick={(e) => setLegal({...legal, suket_sehat_verified: true})} className={legal.suket_sehat_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button onClick={(e) => setLegal({...legal, suket_sehat_verified: false})} className={legal.suket_sehat_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                  </div>
              {/* </div>
              <div className='p-4 text-muted card mb-0 '> */}
                  <div className="d-flex justify-content-center p-5">
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button onClick={(e) => handlePdf(e)} name="suket_kpu" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Surat Ket. KPU</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button onClick={(e) => setLegal({...legal, suket_kpu_verified: true})} className={legal.suket_kpu_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button onClick={(e) => setLegal({...legal, suket_kpu_verified: false})} className={legal.suket_kpu_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button onClick={(e) => handlePdf(e)} name="skck" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>SKCK</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button onClick={(e) => setLegal({...legal, skck_verified: true})} className={legal.skck_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button onClick={(e) => setLegal({...legal, skck_verified: false})} className={legal.skck_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button onClick={(e) => handlePdf(e)} name="kta_parpol" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>KTA PARPOL</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button onClick={(e) => setLegal({...legal, kta_parpol_verified: true})} className={legal.kta_parpol_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button onClick={(e) => setLegal({...legal, kta_parpol_verified: false})} className={legal.kta_parpol_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button onClick={(e) => handlePdf(e)} name="dokumen_lainnya" className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Dokumen Lainnya</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button onClick={(e) => setLegal({...legal, dokumen_lainnya_verified: true})} className={legal.dokumen_lainnya_verified === true ? "btn btn-sm btn-success" : "input-group-text"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button onClick={(e) => setLegal({...legal, dokumen_lainnya_verified: false})} className={legal.dokumen_lainnya_verified === false ? "btn btn-sm btn-danger" : "input-group-text"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                  </div>
              </div>
          </div>
      </div>   
          <button type="submit" className="btn btn-primary" style={{float: "right"}} onClick={handleSubmit} >Verifikasi</button>
    </div>
  )
}

export default Berkas
