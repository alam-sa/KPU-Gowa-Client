import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getParpols } from "../store/action";
import Select from 'react-select'
import axios from '../api/config';
import { toast } from 'react-toastify';

 const AddUserParpol =() => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    partai: ''
  })
  const dispatch = useDispatch();
  const parpols = useSelector(state => state.parpol.parpols);

  useEffect(() => {
    dispatch(getParpols());
}, [])

  function handleTogglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
}

function handleEmail(event) {
  setData({
    ...data,
    email: event.target.value
  })
}

function handlePassword(event) {
  setData({
    ...data,
    password: event.target.value
  })
}

function handleSelectPartai(selectedPartai) {
  setData({
      ...data,
      partai: selectedPartai
  })
}

function handleSubmit() {
  // dispatch(addUser(data))
  console.log(data);
  const payload = {
    email: data.email,
    password: data.password
  }
  axios({
    url: `parpolUser/superAdmin/${data.partai.value}`,
    method: 'POST',
    data: payload,
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
  .then((res) => {
    // dispatch(setLoadingUsers(false))
    // dispatch(getUsers())
    toast.success(res.data.message, {
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
    // dispatch(setLoadingUsers(false))
    toast.error(err.response.data.message[0], {
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
            <div className="input-group mb-3" >
            <label htmlFor="parpol" className="form-label">Partai Politik</label>
              <Select
                  name="parpol"
                  closeMenuOnSelect={true}
                  hideSelectedOptions={false}
                  options={parpols}
                  // value={userData.partai}
                  className="col-12 p-0"
                  classNamePrefix="select"
                  placeholder={'Pilih Parpol'}
                  onChange={handleSelectPartai}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Masukkan Email" onChange={(e) => handleEmail(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type={isPasswordVisible ? 'text': 'password'} className="form-control" id="password" placeholder="Masukkan Password" onChange={(e) => handlePassword(e)} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => handleTogglePasswordVisibility()} />
              <label className="form-check-label" htmlFor="exampleCheck1">Lihat Password</label>
            </div>
            <button type="submit" className="btn btn-primary" style={{float: "right"}} onClick={handleSubmit} >Tambah Admin</button>
          </div>

              
        </React.Fragment>
    )
}

export default AddUserParpol