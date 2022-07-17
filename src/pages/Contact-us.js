import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center h-full w-full md:px-8">
      <h3 className="text-white text-2xl text-center">
        Hey, we are still in the works,
        <br className="hidden md:block" /> but you can send us a message!
      </h3>
      <form className="flex flex-col text-white font-poppins font-light">
        {/* First name field */}
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" className="form-control" placeholder="Enter your first name" />
        {/* Last name field */}
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" name="lastname" type="text" className="w-full" placeholder="Enter your last name" />
        {/* Email field */}
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" className="form-control" placeholder="Enter your email Address" />
      </form>
    </div>
  );
};

export default ContactUs;
