import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";
import { BASEURL, TODODELETE_ENDPOINT, TODOGET_ENDPOINT, TODOPOST_ENDPOINT, TODOPUT_ENDPOINT } from "../api";


const Todo = () => {
  const [inputValue, setInputValue] = useState({ title: "", desc: "" });
  const [arrayValue, setArrayValue] = useState([]);
  const [value, setValue] = useState(false);
  const idUser = sessionStorage.getItem('id')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value , userID : idUser });
  };

  useEffect(() => {
    const getData = async () => {  
      try {
        const res = await axios.get(BASEURL+TODOGET_ENDPOINT+idUser);
        setArrayValue(res.data.data); 
      } catch (err) {
        console.log(err); 
      }
    };
  
    getData();
  }, []);
console.log(inputValue);

  const handleSumbit = async() => {
    try {
      if (inputValue.title !== "" && inputValue.desc !== "") {
        const res = await axios.post(BASEURL+ TODOPOST_ENDPOINT,inputValue)
        setArrayValue([...arrayValue, inputValue]);
        console.log(arrayValue);
        setInputValue({ title: "", desc: "" });
        toast.success("Success Add !");
      } else {
        toast.error("fill the form");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdte = (e) => {
    setValue(true);
    console.log(e, "e");
    setInputValue(e);
  };

  const handleUpdateBtn = async() => {
    const res = await axios.put(BASEURL+TODOPUT_ENDPOINT+inputValue._id ,inputValue)
    const result = arrayValue.map((e)=>{
      if(e._id === inputValue._id ){
        return {
          ...e,
          title : inputValue.title,
          desc : inputValue.desc
        }
      }
      return e
    })
    setArrayValue(result);
    setValue(false)
    setInputValue({ title: "", desc: "" });
    toast.success("Success Update !");
    toast.error("Task Not Save ! please Login");
  };

  const handleDelete = (id) => {
    const res = axios.delete(BASEURL+TODODELETE_ENDPOINT+id )
    setArrayValue(arrayValue.filter((e) => e._id !== id));
    toast.success("Success Delete !");
  };

  return (
    <>
      <ToastContainer />
      <div className="container" style={{ minheight: "85vh" }}>
        <div className="main-block mb-5">
          {value ? <div className="d-flex align-items-center justify-content-around"><h1>UpDate Todo</h1> <p className="fs-2" onClick={() =>{ setValue(false) , setInputValue({ title: "", desc: "" })}}><FaWindowClose /></p> </div>: <h1>Add Todo</h1>}
          <div style={{margin:'30px'}}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={inputValue.title}
              required
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="desc"
              placeholder="message"
              value={inputValue.desc}
              required
              onChange={(e) => handleChange(e)}
            />
            <br />

            <hr />
            <div className="btn-block">
              {value ? (
                <button className="cbtn" onClick={handleUpdateBtn}>
                  Update
                </button>
              ) : (
                <button className="cbtn" onClick={handleSumbit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 flex-wrap">
          {arrayValue &&
            arrayValue.map((e, index) => {
              return (
                <div
                  className="card "
                  style={{ width: "18rem", marginTop: "1rem" }}
                  key={index}
                >
                  <div className="card-body p-4">
                    <h5 className="card-title">{e.title}</h5>

                    <p className="card-text">{e.desc}</p>
                    <div className="d-flex">
                      <button
                        className="me-3 cbtn"
                        onClick={() => {
                          handleUpdte(e, index);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-danger ms-3 cbtn"
                        onClick={() => {
                          handleDelete(e._id);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Todo;
