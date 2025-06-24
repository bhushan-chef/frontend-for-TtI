import React from "react";
import { assets, Creators } from "../assets/assets";
import { motion } from "motion/react";
const Created = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-12"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
        Created By
      </h1>
      <div className="flex flex-wrap gap-6">
        {Creators.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt=""
                className="rounded-full w-14"
              ></img>
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
              </div>
              <p className="text-center text-sm text-gray-600 font-semibold">
                {testimonial.text}
              </p>
            </div>
          </div>
          
        ))}
      </div>
    </motion.div>
  );
};

export default Created;
