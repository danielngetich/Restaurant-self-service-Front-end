import { useState } from "react";
import "./Admin.css";
import {Link} from "react-router-dom"
function Admin() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const admin = {
      username: username,
      password: password,
    };
    fetch("/admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="main">
      <form action="action_page.php" onSubmit={onSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Chief Registration Form.</p>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
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
            onChange={(e) => SetPassword(e.target.value)}
            id="psw"
          ></input>
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit" class="registerbtn">
            Register
          </button>
          <div className="container signin">
          <p>
            Already have an account? <Link to="/login"><button type="click">Login</button>.</Link>
          </p>
        </div>
        </div>
      </form>
    </div>
  );
}
export default Admin;
