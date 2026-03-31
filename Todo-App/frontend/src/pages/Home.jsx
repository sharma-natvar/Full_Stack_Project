import React from "react";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="w-100 d-flex align-items-center justify-content-center flex-column" style={{height:'100vh'}}>
        <h1 className="text-center mb-4">Write it Down,<br/> Plan it Out, Share Your Achievements.</h1>
        <p className="fs-5 text-secondary">
          Turn your plans into action. Our to-do app helps<br/> you stay focused,
          motivated, and achieve more.
        </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
