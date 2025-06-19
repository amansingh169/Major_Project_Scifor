import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const AuthModal = ({ show, onClose, onLogin, onSignup }) => {
  const { login, signup } = useContext(UserContext);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (!formData.username || !formData.name || !formData.email || !formData.password) {
        return setError("All fields are required");
      }

      const res = signup(formData);
      if (!res.success) setError(res.message);
    } else {
      if (!formData.email || !formData.password) {
        return setError("All fields are required");
      }

      const res = login(formData.email, formData.password);
      if (!res.success) setError(res.message);
    }
  };

  return (
    <div className={`modal fade ${show ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content dropdown-box show text-white">
          <div className="modal-header border-0">
            <h1 className="modal-title text-accent">{isSignup ? "Sign Up" : "Login"}</h1>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-body">
              {isSignup && (
                <>
                  <label className="text-accent ms-2">Username</label>
                  <input
                    type="text"
                    className="form-control form-control-md mb-3"
                    name="username"
                    placeholder="e.g. armin123"
                    onChange={handleChange}
                  />

                  <label className="text-accent ms-2">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-md mb-3"
                    name="name"
                    placeholder="What you want to be called"
                    onChange={handleChange}
                  />
                </>
              )}

              <label className="text-accent ms-2">Email</label>
              <input
                type="email"
                className="form-control form-control-md mb-3"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />

              <label className="text-accent ms-2">Password</label>
              <input
                type="password"
                className="form-control form-control-md mb-3"
                name="password"
                placeholder="Choose a strong password"
                onChange={handleChange}
              />

              {error && <div className="text-danger">{error}</div>}
            </div>

            <div className="modal-footer border-0 d-flex flex-column align-items-center gap-4">
              <button className="btn btn-primary rounded-5">
                {isSignup ? "Register" : "Login"}
              </button>
              <button
                className="btn fw-normal text-primary p-0 align-self-end"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Already have an account? Login" : "New user? Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
