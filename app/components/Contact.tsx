import React from "react";

const Contact = () => {
  return (
    <section
      className="flex-1 min-h-screen opacity-70 lg:px-12 px-4 lg:py-4"
      id="contact"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 md:pt-24 pt-28">
        <div className="space-y-8">
          <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
            Contact Us
          </h1>
          <div>
            <h1 className="text-4xl font-bold">Email</h1>
            <p className="text-2xl">info@boyscbo.org</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Mobile</h1>
            <p className="text-2xl">+254 729 449 143</p>
            <p className="text-2xl">+254 733 634 937</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">WhatsApp</h1>
            <p className="text-2xl">+254 729 449 143</p>
          </div>
        </div>
        <div className="bg-contact bg-cover bg-center rounded-lg max-lg:hidden" />
      </div>
    </section>
  );
};

export default Contact;
