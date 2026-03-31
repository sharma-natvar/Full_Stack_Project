import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { BASEURL, LOGIN_ENDPOINT, REGISTRATION_ENDPOINT } from "../api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignPage = () => {
  const [value, setValue] = useState(true);
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  
  const handleCreate = async (e) => {
    try {
       return(
      await axios
      .post(BASEURL + REGISTRATION_ENDPOINT, inputValue)
      .then((res) => {
        toast.success("Success created !");
        setValue(true)
        setInputValue({
          userName:'',
          email:'',
          password:''
        })
      })
      )
     } catch (error) {
      const message = error.response.data.error
       toast.error(message + " !");
     }
  };


  const handleSumbit = async() => {
    try {
      return(
     await axios
     .post(BASEURL + LOGIN_ENDPOINT, inputValue)
     .then((res) => {
       console.log(res, 'res');
       const dataId = res.data.data._id
       sessionStorage.setItem("id",dataId)
       console.log(dataId, 'dataId');
       toast.success("Success Login !");
      })
      .then(()=>{
        navigate('/todo')
      })
      )
    } catch (error) {
      toast.error("SomeThing Error !");
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="container">
        <div
          style={{ height: "90vh" }}
          className="d-flex flex-column align-items-center"
        >
          {value ? (
            <h2 className="m-5">LogIn </h2>
          ) : (
            <h2 className="m-5">SignUp</h2>
          )}
          <div
            className="p-4 border border-info-subtle rounded"
            style={{ maxWidth: "400px" }}
          >
            {value ? (
              ""
            ) : (
              <div>
                <label id="icon">
                  <FaUser />
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  value={inputValue.userName}
                  required
                  onChange={(e) => handleChange(e)}
                />
                <br />
              </div>
            )}

            <label id="icon">
              <MdEmail />
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={inputValue.email}
              required
              onChange={(e) => handleChange(e)}
            />
            <br />

            <label id="icon">
              <RiLockPasswordFill />
            </label>
            <input
              type="password"
              name="password"
              value={inputValue.password}
              placeholder="Password"
              required
              onChange={(e) => handleChange(e)}
            />

            <div className="form-text mb-3">
              We'll never share your Details with anyone else.
            </div>

            <div className="form-text mb-3">
              {value ? (
                <p>
                  {" "}
                  Not Account{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setValue(false)}
                  >
                    SignUp
                  </span>{" "}
                </p>
              ) : (
                <p>
                  {" "}
                  Already Account{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setValue(true)}
                  >
                    Login{" "}
                  </span>{" "}
                </p>
              )}
            </div>
            {value ? (
              <button
                type="submit"
                className="btn btn-primary cbtn"
                onClick={handleSumbit}
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary cbtn"
                onClick={handleCreate}
              >
                Create
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignPage;
