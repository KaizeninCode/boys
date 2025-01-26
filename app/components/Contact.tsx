import React from "react";

const Contact = () => {
  return (
    <section className="flex-1 min-h-screen opacity-70 lg:px-12 px-4 lg:py-4" id="contact">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 md:pt-24 pt-28">
        <form action="#" className="p-4 space-y-4">
          <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
            Contact Us
          </h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="lg:text-2xl text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border lg:p-2 p-1 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="lg:text-2xl text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border lg:p-2 p-1 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="lg:text-2xl text-xl">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border lg:p-2 p-1 rounded-lg text-black"
            ></textarea>
          </div>
          <button className="bg-white text-black lg:p-2 p-1 rounded-lg mt-4 mx-auto hover:bg-black hover:text-white hover:shadow-sm hover:shadow-white transition duration-500 ease">
            Submit
          </button>
        </form>
        <div className="bg-contact bg-cover bg-center rounded-lg max-lg:hidden"/>
      </div>
    </section>
  );
};

export default Contact;
