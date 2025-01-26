import React from "react";

const About = () => {
  return (
    <section className="flex-1 min-h-screen opacity-70 lg:px-12 px-6 lg:py-4" id="about">
      <div className="lg:grid lg:grid-cols-2 gap-8 mt-6">
        <div>
          <h1 className="font-marcellus lg:text-5xl text-xl lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
            Problem Statement
          </h1>
          <p className="lg:text-2xl text-lg max-lg:min-w-screen-md">
            Male children in many communities face various challenges including
            violence, abuse, lack of access to education and healthcare, and
            limited opportunities for personal development. These challenges
            hinder their ability to lead fulfilling lives and contribute to
            their communities. In Central Kisumu subcounty, Kisumu County,
            limited economic opportunities further exacerbate the vulnerability
            of male children in this area, hindering their ability to realize
            their full potential and contribute positively to their communities.
            The absence of comprehensive support systems and opportunities for
            skill development leaves male children marginalized and at risk of
            perpetuating cycles of poverty and disadvantage. Therefore, there is
            an urgent need for targeted interventions to address these pressing
            issues and empower male children in Central Kisumu subcounty to lead
            fulfilling lives and become valued members of society.
          </p>
        </div>
        <div className="max-lg:mt-8">
          <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
            Description
          </h1>
          <p className="lg:text-2xl text-lg">
            Best Outcomes Youth Solace (BOYS) is a non-profit organization
            dedicated to addressing the challenges faced by male children,
            particularly in vulnerable communities. BOYS is committed to
            creating a safe and nurturing environment where boys can thrive,
            realize their potential, and contribute positively to society. The
            organization shall primarily operate in Central Kisumu subcounty
            within Kisumu County. This focus allows us to target our efforts and
            resources effectively within a specific geographic area, ensuring
            that our interventions have a meaningful impact on the communities
            we serve. <br /> <br />
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
    </section>
  );
};

export default About;
