import React from "react";
import ReactDOM from "react-dom";
import Card from "../Components/Card";
import Sdata from "../Components/Sdata";

const Blog = () => {
  return (
    <>
      <div class="blgg">
        <img
          class="img_blog"
          src="https://www.w3schools.com/howto/img_snow_wide.jpg"
          alt="Snow"
        />
        <div class="centered">Our Blog</div>
      </div>
      <br />

      <div className="container my-3">
        <div className="row" style={{ justifyContent: "space-around" }}>
          {Sdata.map((val, ind) => {
            return <Card imgsrc={val.imgsrc} title={val.title} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Blog;
