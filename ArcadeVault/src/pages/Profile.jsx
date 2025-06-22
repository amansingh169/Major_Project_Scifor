import ThemeSelector from "../components/ThemeSelector";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="d-flex align-items-center gap-2 mb-5">
        <h1 className="lh-1 m-0">Library</h1>
        <a href="">
          <i className="bi bi-arrow-clockwise fs-3 text-muted"></i>
        </a>
      </div>

      <ThemeSelector />
    </div>
  );
};

export default Profile;
