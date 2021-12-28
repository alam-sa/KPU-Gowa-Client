import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'


const Berkas = ({caleg}) => {
  const { dokumen } = useSelector((state) => state.dokumen);

  const [ legal, setLegal ]= useState({
    ktp: dokumen.ktp,
    bb1: dokumen.bb1,
    bb2: dokumen.bb2,
    ijazah: dokumen.ijazah,
    suket_sehat: dokumen.suket_sehat,
    suket_kpu: dokumen.suket_kpu,
    skck: dokumen.skck,
    kta_parpol: dokumen.kta_parpol,
    dokumen_lainnya: dokumen.dokumen_lainnya,

  });
  useEffect(() => {
    console.log(caleg, "Dokumen>>>>>>>>>>>>>>>>>>");
  },[caleg]);
  
  function handlePdf(event) {
    event.preventDefault()
    console.log(event.target.name);
    openInNewTab('http://localhost:3001/pdf/ada.pdf')
  }

  function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
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
                                    <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>BB.1</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>BB.2</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Ijazah</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                </div>
                            </div>  
                      </div>
                      <div className='d-flex flex-column ml-5'>
                        <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                        </div>
                          <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Surat Ket. Sehat</button>
                          <div className="input-group justify-content-center">
                                <div className="input-group-prepend">
                                    <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                </div>
                                <div className="input-group-append">
                                    <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
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
                              <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Surat Ket. KPU</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>SKCK</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>KTA PARPOL</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                          <div className='d-flex flex-column ml-5'>
                            <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                    <img src="http://localhost:3001/asset/pdf.png" height="150px"  width="150px" alt="logo" />
                            </div>
                              <button className="btn mt-3 mb-3 btn-sm btn-info"><i className="fas fa-eye mr-1 ml-0"></i>Dokumen Lainnya</button>
                              <div className="input-group justify-content-center">
                                    <div className="input-group-prepend">
                                        <button className={"btn btn-sm btn-success"} name='logo_status' id ='logo_status'><i className="fas fa-check mx-2" id ='logo_status'></i></button>
                                    </div>
                                    <div className="input-group-append">
                                        <button className={"btn btn-sm btn-danger"} name='logo_status' id ='logo_status' ><i className="fas fa-times text-lg mx-2" id ='logo_status'></i></button>
                                    </div>
                                </div>  
                          </div>
                  </div>
              </div>
          </div>
      </div>   
    </div>
  )
}

export default Berkas
