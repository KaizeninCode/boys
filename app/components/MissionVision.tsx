import React from "react";

const MissionVision = () => {
  return (
    <section
      className="flex-1 min-h-screen opacity-70 lg:px-12 px-6 lg:py-4"
      id="mission"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-16">
        <div className="mx-auto">
          <h1 className="font-marcellus lg:text-5xl text-xl lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
            Mission
          </h1>
          <p className="lg:text-2xl text-xl">
            Our mission is to empower male children by providing them with the
            necessary support, resources, and opportunities to overcome
            obstacles and lead fulfilling lives as valued members of society.
          </p>
          <h1 className="font-marcellus lg:text-5xl text-xl lg:my-8 my-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
            Vision
          </h1>
          <p className="lg:text-2xl text-xl">
            We envision a society where all male children have access to
            education, healthcare, protection from violence and exploitation,
            and opportunities for personal and professional growth, regardless
            of their background or circumstances.
          </p>
        </div>
        <div className="bg-mission-1 bg-cover bg-center rounded-lg" />
      </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-16">
          <div className="bg-mission-2 bg-cover bg-center rounded-lg" />
                <div className="lg:flex lg:flex-col lg:gap-8 space-y-4 mt-8">
          <div>
            <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
              Objectives
            </h1>
            <ul className="lg:text-2xl text-xl list-disc lg:pl-8 pl-4">
              <li>
                Establish community-level protection systems and raise awareness
                to prevent violence, abuse, and exploitation against male
                children.
              </li>
              <li>
                Provide comprehensive support including mentorship, education, and
                access to essential services to empower male children and enable
                them to realize their potential.
              </li>
              <li>
                Promote skills training, talent development, and economic
                opportunities to uplift vulnerable male children and foster their
                integration into society.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
              Values
            </h1>
            <ul className="lg:text-2xl text-xl list-disc lg:pl-8 pl-4">
              <li>
                <em className="font-extrabold">Integrity:</em> We uphold
                accountability and transparency in all our actions, ensuring the
                trust of the communities we serve.
              </li>
              <li>
                <em className="font-extrabold">Collaboration:</em> We actively
                engage in partnerships to leverage resources and expertise,
                maximizing our impact in addressing the challenges faced by male
                children.
              </li>
              <li>
                <em className="font-extrabold">Inclusivity:</em> We prioritize the
                inclusion of vulnerable male children in all our initiatives,
                ensuring that their voices are heard and their needs are
                addressed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
