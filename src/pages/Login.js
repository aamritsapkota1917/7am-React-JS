import React from 'react'

const Login = () => {
  return (

<>
<div class="container">
    <div class="row d-flex justify-content-center" >
        <div class="col-md-4 shadow p-3">
        <form>
  <div class="mb-3">
    <lable htmlfor="exampleInputEmail1" class="form-label">Email address</lable>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <lable htmlfor="exampleInputPassword1" class="form-label">Password</lable>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remmember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>

    </div>

</div>
</>
    )
}

export default Login