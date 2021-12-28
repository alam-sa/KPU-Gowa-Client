import React, { useEffect, useState } from 'react'
import moment from 'moment';
import DatePicker from 'react-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getProvinces, getDistricts, getDapils, getParpols } from '../store/action';
import axios from '../api/config'
import Select from 'react-select'
import { toast } from 'react-toastify';

var idLocale = require('moment/locale/id'); 
  moment.locale('id', idLocale);

const ProfilCalon = ({loading, caleg, dapil, parpol}) => {
  
  const [profil, setProfil] = useState({
    nama: caleg.nama,
    NIK: caleg.NIK,
    no_urut: caleg.no_urut,
    foto_profil: caleg.foto_profil,
    partai: { value: caleg.partaiId, label: parpol.nama_partai },
    dapil: { value: caleg.dapilId, label: dapil.nama_dapil },
    email: caleg.email,
    tempat_lahir: caleg.tempat_lahir,
    tanggal_lahir: caleg.tanggal_lahir,
    agama: {value: caleg.agama, label: caleg.agama},
    dapilId: caleg.dapilId,
    partaiId:caleg.partaiId,
    noHp: caleg.noHp,
    provinsi: JSON.parse(caleg.provinsi),
    kabupaten: JSON.parse(caleg.kabupaten),
    kecamatan: JSON.parse(caleg.kecamatan),
    alamat: caleg.alamat
  });

  useEffect(() => {
    
  },[caleg]);


    return (
        <React.Fragment>
          {
            loading || caleg === undefined ? <h1>Loading....</h1> :
            <div>
              <div className='row'>
              </div>              
              <form className="mt-5">
                  <div className="form-row">
                      <div className="col-6">
                          <div className="card p-3 h-100">
                          <div className='p-4 text-muted card mb-3 '>
                          <label htmlFor="foto_profil">Foto Calon</label>
                          <div className="d-flex ">
                              <div className='card mb-0' style={{width:"150px", height:"150px", minWidth:'150px'}}>
                                  <input type="file" className='d-none' id='logo'/>
                                      <img src={profil.foto_profil ? `${profil.foto_profil}` : "avatar.jpg"} height="150px"  width="150px" alt="" htmlFor={'logo'} />
                              </div>
                              <h3 className="ml-5">Nomor Urut: {profil.no_urut ? profil.no_urut : '-'}</h3>
                          </div>
                      </div>
                              {/* <label htmlFor="noUrut">Nomor Urut</label>
                              <input type="text" className="form-control mb-3" id="noUrut" value={caleg.no_urut} disabled /> */}
                              <label htmlFor="nik">NIK</label>
                              <input type="text" placeholder="Belum mengisi NIK" disabled="true" name="NIK" className="form-control mb-3" id="nik" value={profil.NIK} />
                              <label htmlFor="fullName">Nama Lengkap</label>
                              <input type="text" placeholder="Belum mengisi nama lengkap" disabled="true" name="nama" className="form-control mb-3" id="fullName" value={profil.nama} />
                              <label htmlFor="birthPlace">Tempat Lahir</label>
                              <input type="text" placeholder="Belum mengisi tempat lahir" disabled="true" name="tempat_lahir" className="form-control mb-3" id="birthPlace" value={profil.tempat_lahir} />
                              <label htmlFor="birthDate">Tanggal Lahir</label>
                              <DatePicker
                              disabled={true}
                              value={profil.tanggal_lahir}
                              className="mb-3"
                              maxDate={new Date()}
                              placeholder="Belum mengisi Tanggal Lahir"
                              />
                              
                          </div>
                      </div>
                      <div className="col-6">
                          
                          <div className="card p-3 h-100">
                          <label htmlFor="district">Agama</label>
                              <Select
                                  name="agama"
                                  value={profil.agama}
                                  className="mb-3"
                                  classNamePrefix="select"
                                  isDisabled={true}
                                  placeholder="Belum mengisi agama"
                              />
                              <label htmlFor="email">Email</label>
                              <input type="text" placeholder="Belum mengisi email" name="email" disabled="true" className="form-control mb-3" id="email" value={profil.email} />
                              <label htmlFor="phoneNumber">Nomor Telepon</label>
                              <div class="input-group input-group mb-3">
                                <div class="input-group-prepend">
                                  <span className="input-group-text" id="inputGroup-sizing-default">+62</span>
                                </div>
                                <input type="text" placeholder="Belum mengisi nomor telepon" name="noHp" disabled="true" className="form-control" id="phoneNumber" value={profil.noHp} />
                              </div>
                              <label htmlFor="province">Provinsi</label>
                              <Select
                                  name="Provinsi"
                                  value={profil.provinsi}
                                  className="mb-3"
                                  classNamePrefix="select"
                                  isDisabled={true}
                                  placeholder="Belum mengisi alamat"
                              />
                              <label htmlFor="cityDistrict">Kabupaten / Kota</label>
                              <Select
                                  name="kabupaten"
                                  value={profil.kabupaten}
                                  className="mb-3"
                                  classNamePrefix="select"
                                  isDisabled={true}
                                  placeholder="Belum mengisi alamat"
                              />
                              <label htmlFor="district">Kecamatan</label>
                              <Select
                                  name="kecamatan"
                                  value={profil.kecamatan}
                                  className="mb-3"
                                  classNamePrefix="select"
                                  isDisabled={true}
                                  placeholder="Belum mengisi alamat"
                              />
                              {/* <label htmlFor="urban">Kelurahan / Desa</label>
                              <input type="text" className="form-control mb-3" id="urban" value="Bone" /> */}
                              <label htmlFor="address">Alamat</label>
                              <textarea placeholder="Belum mengisi alamat" disabled="true" className="form-control mb-3" name="alamat" id="address" rows="3"value={profil.alamat} onChange={(e) => setProfil({...profil, alamat: e.target.value})} />
                          {/* <button type="submit" className="btn btn-primary w-30">Simpan</button> */}
                          </div>
                      </div>
                  </div>
              </form>
            </div>
            // JSON.stringify(caleg)
          }
        </React.Fragment>
    )
}

export default ProfilCalon
