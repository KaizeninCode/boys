import React from "react";

const Contact = () => {
  return (
    <section className="flex-1 min-h-screen opacity-70 px-12 py-4" id="contact">
      <div className="grid grid-cols-2 gap-8 mt-24">
        <form action="#" className="p-4 space-y-4">
          <h1 className="text-5xl font-marcellus mb-8 bg-white text-black w-fit p-4 rounded-lg">
            Contact Us
          </h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-2xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border p-2 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-2xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border p-2 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-2xl">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border p-2 rounded-lg text-black"
            ></textarea>
          </div>
          <button className="bg-white text-black p-2 rounded-lg mt-4 mx-auto hover:bg-black hover:text-white hover:shadow-sm hover:shadow-white transition duration-500 ease">
            Submit
          </button>
        </form>
        <div className="bg-contact bg-cover bg-center rounded-lg"/>
      </div>
    </section>
  );
};

export default Contact;
