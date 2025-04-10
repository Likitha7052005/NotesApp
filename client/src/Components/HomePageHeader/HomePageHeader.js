import { useNavigate } from "react-router-dom";
import "./HomePageHeader.css";

function HomePageHeader() {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const goToHome = () => {
    navigate("/home");
  };

  const goToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <div className="home-page-header-div text-white">
      <h1 onClick={goToHome}>Notes App</h1>
      <div className="dropdown">
        <button
          className="btn btn-outline-light"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={goToProfilePage}
            >
              Profile
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button" onClick={logOut}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePageHeader;
