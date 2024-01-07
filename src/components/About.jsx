import React from "react";
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] 
            md:mx-auto lg:mx-0 rounded-2xl "
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:text-4xl font-medium 
              lg:font-extrabold mb-3 before:content-about relative 
              before:absolute before:opacity-40 
              before:-top-[2rem] before:hidden before:lg:block"
              >
                sayan chakrabortty
              </h2>
              <p className="mb-4 text-accent">Freelancer Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                ex vel velit tincidunt finibus. Vestibulum ante ipsum primis in
                faucibus
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                aliquam?
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">Contact me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
