import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className='d-flex align-items-center py-4 bg-body-tertiary'>
  <div class="form-signin w-100 m-auto">
  <form>
    <img class="mb-4" src="logo512.png" alt="" width="57" height="57" />
    <h1 class="h3 mb-3 fw-normal">Register</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Fajar" />
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="number" class="form-control" id="floatingInput" placeholder="08xxxxx" />
      <label for="floatingInput">No HP</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
    <button class="btn btn-primary w-100 py-2 mt-2"  onClick={() => navigate("/login")}>Login</button>
  </form>
</div>
</div>
    )
}

export default Register