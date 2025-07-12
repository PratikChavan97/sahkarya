import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./module.LoginDashboard.css";

function LoginDashboard({ authenticate, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({});
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function submitData() {
      try {
        if (submit) {
          const res = await axios.post(
            "http://127.0.0.1:8000/api/v1/users/login",
            credentials
          );
          if (res.data.token) {
            authenticate(true);
            setUser(res.data.user);
            navigate("/dashboard");
            localStorage.setItem("keepLogged", true);
          }
        }
      } catch (err) {
        if (err) console.log(err.message);
      }
    }
    submitData();
  }, [email, password, submit, credentials, navigate, authenticate, setUser]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    setCredentials({ email, password });
  }

  return (
    <div className="login-page">
      <img src="assets/main.png" alt="logo" />
      <form>
        <input
          type="email"
          placeholder="example@gmail.com"
          autoComplete="true"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          autoComplete="true"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </div>
  );
}

export default LoginDashboard;
