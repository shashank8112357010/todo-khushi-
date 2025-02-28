import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()




  function handleSubmit(e) {
    localStorage.setItem("firstName", firstName)
    localStorage.setItem("lastName", lastName)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    navigate('/login');
  }



  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="" style={{ height: "100vh" }}>
          {/* Jumbotron */}
          <div
            className="px-4 py-5 px-md-5 text-center h-100vh text-lg-start"
            style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
          >
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="my-5 display-3 fw-bold ls-tight">
                    Todo List <br />
                    <span className="text-primary">Manage your time</span>
                  </h1>
                  <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    itaque accusantium odio, soluta, corrupti aliquam quibusdam
                    tempora at cupiditate quis eum maiores libero veritatis? Dicta
                    facilis sint aliquid ipsum atque?
                  </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card">
                    <div className="card-body py-5 px-md-5">
                      <form>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                              <label className="form-label" htmlFor="form3Example1">
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              <input
                                type="text"
                                id="form3Example2"
                                className="form-control"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                              <label className="form-label" htmlFor="form3Example2">
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Email input */}
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>
                        {/* Password input */}
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example33"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example33"
                          >
                            Subscribe to our newsletter
                          </label>
                        </div>
                        {/* Submit button */}
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary btn-block mb-4"
                          onClick={handleSubmit}
                        >
                          Sign up
                        </button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </>

    </div>
  )
}

export default Register