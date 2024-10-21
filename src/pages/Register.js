import React from 'react'

const Register = () => {
  return (
<>
<div className="container my-3">
    <div className="row d-flex justify-content-center" >
        <div className="col-md-4 shadow p-3">
        <form className="row g-3">
  <div className="col-md-6">
    <label htmlfor="inputEmail4" className="htmlform-label">Email</label>
    <input type="email" className="htmlform-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlfor="inputPassword4" className="htmlform-label">Password</label>
    <input type="password" className="htmlform-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlfor="inputAddress" className="htmlform-label">Address</label>
    <input type="text" className="htmlform-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlfor="inputAddress2" className="htmlform-label">Address 2</label>
    <input type="text" className="htmlform-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlfor="inputCity" className="htmlform-label">City</label>
    <input type="text" className="htmlform-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label htmlfor="inputState" className="htmlform-label">State</label>
    <select id="inputState" className="htmlform-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlfor="inputZip" className="htmlform-label">Zip</label>
    <input type="text" className="htmlform-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="htmlform-check">
      <input className="htmlform-check-input" type="checkbox" id="gridCheck"/>
      <label className="htmlform-check-label" htmlfor="gridCheck">
        I agree to the terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">SignUp</button>
  </div>
</form>
        </div>

    </div>

</div>
</>
    )
}

export default Register