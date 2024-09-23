import React, { useState } from "react";
import star from "../../assets/img/start.png";
import { testimonials } from "./testimonial-data";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { text, name, role, image } = testimonials[currentIndex];
  return (
    <div className="mt-4 lg:container lg:mx-auto  bg-[#2b2b2ba0] lg:px-14 py-4">
      <div>
        <h1 className="center">
          <span className="sm:text-2xl text-center md:py-8 md:text-4xl font-semibold md:w-[450px]">
            Testimonials That Speak to{" "}
            <span className="text-green-500">My Results</span>
          </span>
        </h1>
      </div>
      <section className="bg-[#1e1e1e]">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-20 lg:px-6">
          <figure className="max-w-screen-md mx-auto h-72 flex flex-col justify-center items-center">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              ></path>
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                {text}
              </p>
            </blockquote>
            <img src={star} className="w-48" alt="rating" />
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img className="w-6 h-6 rounded-full" src={image} alt={name} />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  {name}
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  {role}
                </div>
              </div>
            </figcaption>
          </figure>
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
