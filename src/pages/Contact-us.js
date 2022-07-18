import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-full md:px-8">
      <div className="w-full my-auto">
        <h3 className="mx-2 my-3 text-xl font-medium text-center text-white md:mx-0 md:text-2xl">
          Hey, we are still in the works,
          <br className="hidden md:block" /> but you can send us a message!
        </h3>
        <form className="flex flex-col justify-center w-full space-y-5 font-poppins">
          <div className="flex flex-col w-5/6 m-auto space-y-1">
            {/* First name field */}
            <label htmlFor="firstName" className="text-white">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="rounded-md form-input placeholder:text-gray-300"
              placeholder="Enter your first name"
            />
          </div>

          <div className="flex flex-col w-5/6 m-auto space-y-1">
            {/* last name name field */}
            <label htmlFor="lastname" className="text-white">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="rounded-md form-input placeholder:text-gray-300"
              placeholder="Enter your last name"
            />
          </div>

          <div className="flex flex-col w-5/6 m-auto space-y-1">
            {/* email field */}
            <label htmlFor="email" className="text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="text-gray-900 rounded-md form-input placeholder:text-gray-300"
              placeholder="Enter your email address"
            />
          </div>

          <div className="flex flex-col w-5/6 m-auto space-y-1">
            {/* TextArea */}
            <label htmlFor="textArea" className="text-white">
              Tell us what you need help with:
            </label>
            <textarea
              id="textArea"
              name="textArea"
              className="rounded-md placeholder:text-gray-300"
              rows="4"
              style={{ resize: "none" }}
              placeholder="Enter a topic, like channel problem... "
            ></textarea>
          </div>

          <div className="w-5/6 m-auto ">
            <button className="p-3 px-6 text-white rounded-full bg-mainBlue drop-shadow-lg baseline hover:bg-mainBlueLight">SEND NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
