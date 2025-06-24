import { useContext } from "react";
import ThemeSelector from "../components/ThemeSelector";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="profile-wrapper">
      <div className="d-flex align-items-center gap-2 mb-5">
        <h1 className="lh-1 m-0">Profile</h1>
        <a href="">
          <i className="bi bi-arrow-clockwise fs-3 text-muted"></i>
        </a>
      </div>

      <div className="settings">
        <div className="text-primary">
          <div className="fs-4 mb-2">Preferred Theme:</div>
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
};

export default Profile;
