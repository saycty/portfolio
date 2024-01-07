import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title 
            before:content-testimonials relative
            before:absolute before:opacity-40 
            before:-top-[2rem] before:-left-64 
            before:hidden before:lg:block'>
            what other people say</h2>
          <p classname='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, unde facere ipsam dolor eligendi temporibus saepe provident debitis aperiam labore!</p>
        </div>
        {/* <TestimonialSlider /> */}
      </div>
    </section>
  );
};

export default Testimonials;




