import { useState } from "react";
import { signUpApi } from "../../api/auth/signup/signup.api";
import { useNavigate } from "react-router-dom";
import "./SignUpPanel.css";

function SignUpPanel() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const userDetails = {
    name: name,
    userName: userName,
    password: password,
    emailId: email,
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const signUp = async (e) => {
    setErrorMessage("");
    e.preventDefault();
    try {
      const response = await signUpApi(userDetails);
      if (response.response) {
        setErrorMessage(response.response.data.message);
      } else {
        const token = response.data.accessToken;
        const emailId = response.data.emailId;
        const name =  response.data.name;
        const userName = response.data.userName;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("emailId",emailId);
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("userName",userName);
        navigate("/home");
      }
    } catch (err) {
      console.log("Something Went Wrong!");
    }
  };

  const goToSignupPage = () => {
    navigate("/");
  };

  return (
    <div className="main-div p-5">
      <div className="signup-panel-div bg-white p-1 w-100">
        <div className="header-div">
          <h3>Welcome to Notes App!</h3>
          <p>Sign up to continue</p>
        </div>
        <div className="form-div">
          <form className="input-form-signup" onSubmit={signUp}>
            <input
              className="signup-input bg-light border"
              type="text"
              onChange={updateName}
              value={name}
              placeholder="Name"
            ></input>
            <input
              className="signup-input bg-light border"
              type="text"
              onChange={updateUserName}
              value={userName}
              placeholder="User Name"
            ></input>
            <input
              className="signup-input bg-light border"
              type="email"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
            ></input>
            <input
              className="signup-input bg-light border"
              type="password"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
            ></input>
            <button className="signup-btn text-white" type="submit" placeholder="Sign up">
              sign up
            </button>
            <div className="error-div text-danger">{errorMessage}</div>
            <div className="footer-div">
              <span className="hover" onClick={goToSignupPage}>
                Already have account ? Sign in
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPanel;
