import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/action";
 const FormDapil =() => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch();

  function handleTogglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
}

function handleEmail(event) {
 
}

function handlePassword(event) {
  
}

function handleSubmit() {
}
    
    return(
        <React.Fragment>
         <div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Nama Dapil</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Masukkan Email" onChange={(e) => handleEmail(e)} />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{float: "right"}} onClick={handleSubmit} >Tambah Admin</button>
          </div>

              
        </React.Fragment>
    )
}

export default FormDapil