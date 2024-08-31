import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're Delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            architecto cupiditate sit aut! Odio eos beatae quo officiis non
            iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            natus nesciunt, esse perspiciatis modi sint necessitatibus expedita
            saepe est ea.{" "}
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white mt-5 px-4 py-2 rounded-lg hover:bg-pink-900 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-4 ">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
