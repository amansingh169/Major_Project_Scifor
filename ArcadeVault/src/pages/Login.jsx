import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext); // object destructuring, only getting the login fxn from the context object
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(id, password);
    if (success) navigate("/");
    else setError("Invalid Credentials");
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-danger">{error}</p>}

        <div className="form-group">
          <label htmlFor="id">USERNAME OR EMAIL</label>
          <input
            className="form-control"
            id="id"
            value={id}
            type="text"
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">PASSWORD</label>
          <input
            className="form-control"
            id="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
