import React from 'react'

const Login = () => {
  return (
   <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '24rem', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">Forgot password?</a><br />
            <small>Don't have an account? <a href="#" className="text-decoration-none">Sign up</a></small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
