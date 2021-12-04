import React from 'react'
import { useLocation } from 'react-router';
import moment from 'moment'

var idLocale = require('moment/locale/id'); 
  moment.locale('id', idLocale);

const ProfilCalon = () => {
  const location = useLocation()
  const { data } = location.state


    return (
        <React.Fragment>
          <form>
                <div className="form-row">
                    <div className="col-6">
                        <div className="card p-3">
                            <label htmlFor="noUrut">Nomor Urut</label>
                            <input type="text" className="form-control mb-3" id="noUrut" value={data.no_urut} disabled />
                            <label htmlFor="nik">NIK</label>
                            <input type="text" className="form-control mb-3" id="nik" value={data.NIK} disabled />
                            <label htmlFor="fullName">Nama Lengkap</label>
                            <input type="text" className="form-control mb-3" id="fullName" value={data.nama} disabled />
                            <label htmlFor="birthDate">Tempat Tanggal Lahir</label>
                            <input type="text" className="form-control mb-3" id="birthDate" value={`${data.tempat_lahir}, ${moment(data.tanggal_lahir).format("DD/MM/YYYY")}`} disabled />
                            <label htmlFor="religion">Agama</label>
                            <input type="text" className="form-control mb-3" id="religion" value={data.agama} disabled />
                            <label htmlFor="dapil">Daerah Pemilihan</label>
                            <input type="text" className="form-control mb-3" id="dapil" value={data.Dapil.nama_dapil} disabled />
                            <label htmlFor="partai">Asal Partai</label>
                            <input type="text" className="form-control mb-3" id="partai" value={data.Partai.nama_partai} disabled />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card p-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control mb-3" id="email" value={data.email} disabled />
                            <label htmlFor="phoneNumber">Nomor Telepon</label>
                            <input type="text" className="form-control mb-3" id="phoneNumber" value={data.noHp} disabled />
                            <label htmlFor="province">Provinsi</label>
                            <input type="text" className="form-control mb-3" id="province" value={data.provinsi} disabled />
                            <label htmlFor="cityDistrict">Kabupaten / Kota</label>
                            <input type="text" className="form-control mb-3" id="cityDistrict" value={data.kabupaten} disabled />
                            <label htmlFor="district">Kecamatan</label>
                            <input type="text" className="form-control mb-3" id="district" value={data.kecamatan} disabled />
                            {/* <label htmlFor="urban">Kelurahan / Desa</label>
                            <input type="text" className="form-control mb-3" id="urban" value="Bone" disabled /> */}
                            <label htmlFor="address">Alamat</label>
                            <textarea className="form-control mb-3" id="address" rows="3"value={data.alamat} disabled />
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default ProfilCalon
