import React, { useState } from "react"
import "./App.css"

function App() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  })
  const [count, setCount] = useState(1)

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="App">
      <h1>Step {count} of 3</h1>
      <form
        className="col-4 form"
        onSubmit={() =>
          alert(
            `Submitted Email: ${form.email} Name: ${form.name} Password: ${form.password}`
          )
        }
      >
        {count === 1 ? (
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={updateForm}
              value={form.email}
            />
          </div>
        ) : null}
        {count === 2 ? (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={updateForm}
              value={form.name}
            />
          </div>
        ) : null}
        {count === 3 ? (
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={updateForm}
              value={form.password}
            />
          </div>
        ) : null}
        {count === 3 ? (
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        ) : null}
      </form>
      <button
        className="btn btn-dark"
        type="submit"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Back
      </button>
      <button
        className="btn btn-light"
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count > 2}
      >
        Next
      </button>
    </div>
  )
}

export default App
