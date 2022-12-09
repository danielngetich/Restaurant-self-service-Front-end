import "./Admin.css";
import React, {useState } from "react";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then(res=>res.json())
    .then(json => {
      console.log("json",json)
      if (json.message) {
          setErrors(json.message)
      } else {
          navigate("/addfood")
      }
  })
    }
  return (
    <div className="main">
      <form action="action_page.php" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Login</h1>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="email"
          ></input>

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="psw"
          ></input>
          <button type="submit" class="registerbtn">
            Login
          </button>
          <div>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}
export default Login;
