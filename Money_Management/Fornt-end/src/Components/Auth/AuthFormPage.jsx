import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/globalContext";

const AuthFormPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { loginUser, registerUser } = useGlobalContext();

  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = inputState;

  const handleInput = (field) => (e) => {
    setInputState({ ...inputState, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      loginUser({
        email,
        password,
      });
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      registerUser({
        full_name: name,
        email,
        password,
      });
    }
    console.log(isLogin ? "Login" : "Signup", inputState);
  };

  return (
    <AuthStyled>
      <div className="auth-card">
        <h2>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-control">
              <label>Name</label>
              <input type="text" value={name} onChange={handleInput("name")} />
            </div>
          )}

          <div className="input-control">
            <label>Email</label>
            <input type="email" value={email} onChange={handleInput("email")} />
          </div>

          <div className="input-control">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handleInput("password")}
            />
          </div>

          {!isLogin && (
            <div className="input-control">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleInput("confirmPassword")}
              />
            </div>
          )}

          <div className="submit-btn">
            <Button
              name={isLogin ? "Login" : "Register"}
              bPad={".8rem 1.6rem"}
              bRad={"30px"}
              bg={"var(--color-accent)"}
              color={"#fff"}
            />
          </div>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </AuthStyled>
  );
};

const AuthStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* background: linear-gradient(120deg, #6a11cb, #2575fc); */}

  .auth-card {
    width: 350px;
    padding: 2rem;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #222260;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .input-control {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      label {
        font-size: 0.85rem;
        color: #555;
      }

      input {
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        border: 1px solid #ddd;
        outline: none;
        transition: 0.2s;

        &:focus {
          border-color: #6a11cb;
        }
      }
    }

    .submit-btn {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }

    .toggle-text {
      margin-top: 1rem;
      text-align: center;
      font-size: 0.9rem;

      span {
        color: #6a11cb;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
`;

export default AuthFormPage;
