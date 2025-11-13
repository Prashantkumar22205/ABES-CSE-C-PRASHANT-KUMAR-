import React from 'react'

const Register = () => {
  return (
    <div>
       <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '26rem', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password" required />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="btn btn-success w-100">Register</button>

          <div className="text-center mt-3">
            <small>Already have an account? <a href="/login" className="text-decoration-none">Login</a></small>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
