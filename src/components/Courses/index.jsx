import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card"
import "./style.scss";
import courseApi from "../../service/courses";
const index = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    courseApi
      .getAll()
      .then((res) => {
        setCourse(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="course" className="courses">
      <div className="container">
        <div className="c_wrapper">
          <h1 className="c_title">
            Featured <span>Course</span>
          </h1>
          <p className="c_about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod temporidunt ut labore veniam...
          </p>

          <div className="c_cards">
            {course.map((e) => {
              return <Card key={e._id} state={e} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
