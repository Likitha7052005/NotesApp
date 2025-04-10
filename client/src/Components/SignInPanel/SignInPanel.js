import { useNavigate } from "react-router-dom";
import "./SignInPanel.css";
import { useEffect, useState } from "react";
const { signInApi } = require("../../api/auth/signin/signin.api");
const { verifyUser } = require("../../api/auth/verify/verify.user.api");

function SignInPanel() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const userDetails = {
    userName: userName,
    password: password,
  };

  const showPage = async () => {
    const isVerified = await verifyUser();
    if (isVerified) {
      navigate("/home");
    }
  };

  useEffect(() => {
    showPage();
  }, []);

  function changeUserName(e) {
    setUserName(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  async function signIn(e) {
    setErrorMessage("");
    e.preventDefault();
    try {
      const response = await signInApi(userDetails);
      if (response.response) {
        setErrorMessage(response.response.data.message);
      } else {
        const token = response.data.accessToken;
        const emailId = response.data.emailId;
        const name = response.data.name;
        const userName = response.data.userName;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("emailId", emailId);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("userName", userName);
        navigate("/home");
      }
    } catch (err) {
      console.log("Something Went Wrong!");
    }
  }

  const goToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div className="main-div">
      <div className="signin-panel-div bg-white text-dark p-1 w-100">
        <div className="header-div">
          <h3>Welcome to Notes App!</h3>
          <p>Sign in to continue</p>
        </div>
        <div className="form-div">
          <form className="input-form" onSubmit={signIn}>
            <input
              className="signin-input bg-light border"
              type="text"
              onChange={changeUserName}
              value={userName}
              placeholder="Username"
            ></input>
            <input
              className="signin-input bg-light border"
              type="password"
              onChange={changePassword}
              value={password}
              placeholder="Password"
            ></input>
            <button
              className="signin-btn text-white"
              type="submit"
              placeholder="Sign in"
            >
              sign in
            </button>
            <div className="error-div text-danger">{errorMessage}</div>
            <div className="footer-div">
              <span className="mt-5 hover" onClick={goToSignUpPage}>
                New User ? Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPanel;
