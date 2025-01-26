import React from "react";

const About = () => {
  return (
    <section
      className="flex-1 min-h-screen opacity-70 lg:px-12 px-6 lg:py-4"
      id="about"
    >
      <div className="lg:flex lg:items-center lg:justify-center lg:flex-col gap-8 mt-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h1 className="font-marcellus lg:text-5xl text-xl lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
              Problem Statement
            </h1>
            <p className="lg:text-2xl text-lg max-lg:min-w-screen-md">
              Male children in many communities face various challenges
              including violence, abuse, lack of access to education and
              healthcare, and limited opportunities for personal development.
              These challenges hinder their ability to lead fulfilling lives and
              contribute to their communities. <br /> <br />
              Limited economic opportunities further exacerbate the
              vulnerability of male children in this area, hindering their
              ability to realize their full potential and contribute positively
              to their communities. The absence of comprehensive support systems
              and opportunities for skill development leaves male children
              marginalized and at risk of perpetuating cycles of poverty and
              disadvantage. <br /> <br />
              Therefore, there is an urgent need for targeted interventions to
              address these pressing issues and empower male children to lead
              fulfilling lives and become valued members of society.
            </p>
          </div>
          <div className="bg-about-1 bg-cover bg-center rounded-xl" />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-16">
          <div className="bg-about-2 bg-cover bg-center rounded-xl" />
          <div>
            <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
              Description
            </h1>
            <p className="lg:text-2xl text-lg">
              Best Outcomes Youth Solace (BOYS) is a non-profit organization
              dedicated to addressing the challenges faced by male children,
              particularly in vulnerable communities. BOYS is committed to
              creating a safe and nurturing environment where boys can thrive,
              realize their potential, and contribute positively to society.{" "}
              <br /> <br />
              Our programs include educational support, mentorship, healthcare
              access, and skill development workshops. By providing these
              essential services, we aim to empower boys with the tools and
              opportunities they need to overcome their challenges and build a
              brighter future. We also engage with local communities to raise
              awareness and foster a supportive environment for the holistic
              development of male children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
