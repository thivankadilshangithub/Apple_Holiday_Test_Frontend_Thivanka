import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div
      class="container container1 text-center"
      style={{ boxSizing: "border-box" }}
    >
      <div class="row mt-10" style={{ height: "100vh" }}>
        <div class="col-6 left">
          <img
            src="https://www.kindpng.com/picc/m/227-2271076_student-management-system-symbol-hd-png-download.png"
            alt="Image"
          />
        </div>
        <div class="col-6 right">
          <h3 className="welcome">Welcome</h3>
          <h4 className="content">Student Management System</h4>
          <footer>&copy; 2023 Apple Holidays. All rights reserved.</footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
