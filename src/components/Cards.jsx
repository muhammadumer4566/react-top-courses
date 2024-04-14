import React, { useState } from "react";
import Card from "./Card";

const Cards = ({courses , catagory}) => {

  const [likeCourses,setLikeCourses] = useState([]);
  
  function getCourses() {

    if(catagory === "All"){

      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    }
    else{
      return courses[catagory];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} 
        likeCourses = {likeCourses} setLikeCourses = {setLikeCourses} />;
      })}
    </div>
  );
};

export default Cards;
