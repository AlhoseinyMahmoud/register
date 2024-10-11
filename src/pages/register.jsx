import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState(""); // Assuming number is a part of the form

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let userString = localStorage.getItem("users");
    let userArray = [];

    const obj = { email, password, number };

    if (userString) {
      userArray = JSON.parse(userString);
      let numberIndex = userArray.findIndex(
        (el) => el.number === number && el.password === password
      );
      if (numberIndex === -1) {
        userArray.push(obj);
        localStorage.setItem("users", JSON.stringify(userArray));
        window.location.href = "singin";
      } else {
        alert("This number is already registered");
      }
    } else {
      userArray.push(obj);
      localStorage.setItem("users", JSON.stringify(userArray));
      window.location.href = "/";
    }
  };

  return (
    <>
      <main className=" main form-signin w-100 m-auto pt-5 bg-info my-5">
        <form onSubmit={handleSubmit}>
          <h1 className="h2 mb-3 fw-normal">Get Register</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control bg-light"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control bg-light"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control bg-light"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <div className="form-floating my-2">
            <input
              type="text"
              className="form-control bg-light"
              id="floatingNumber"
              placeholder="Phone Number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <label htmlFor="floatingNumber">Phone Number</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">Aheady have on acontant <Link to={"/signin"}> login </Link></p>
        </form>
      </main>
    </>
  );
}

