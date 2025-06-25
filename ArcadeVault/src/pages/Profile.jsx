import { useContext } from "react";
import ThemeSelector from "../components/ThemeSelector";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-wrapper">
      <div className="d-flex align-items-center gap-2 mb-5">
        <h1 className="lh-1 m-0">Profile</h1>
        <a href="">
          <i className="bi bi-arrow-clockwise fs-3 text-muted"></i>
        </a>
      </div>

      <div className="settings d-flex flex-column gap-3 align-items-start">
        <div>
          <span className="fw-semibold fs-6">DISPLAY NAME:</span>
          <div className="bg-card px-3 py-1 rounded mt-1 fs-5 text-primary">{user.name}</div>
        </div>

        <div>
          <span className="fw-semibold fs-6">USERNAME:</span>
          <div className="bg-card px-3 py-1 rounded mt-1 fs-5 text-primary">#{user.username}</div>
        </div>

        <div>
          <span className="fw-semibold fs-6">EMAIL:</span>
          <div className="bg-card px-3 py-1 rounded mt-1 fs-5 text-primary">{user.email}</div>
        </div>

        <div>
          <div className="fw-semibold fs-6">PREFERRED THEME:</div>
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
};

export default Profile;
