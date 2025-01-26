import React from "react";

const MissionVision = () => {
  return (
    <section className="flex-1 min-h-screen opacity-70 px-12 py-4" id="mission">
      <div className="flex flex-col gap-8 mt-6">
        <div className=" mx-auto">
          <h1 className="font-marcellus text-5xl mb-8 bg-white text-black w-fit p-4 rounded-lg">
            Mission
          </h1>
          <p className="text-2xl">
            Our mission is to empower male children by providing them with the
            necessary support, resources, and opportunities to overcome
            obstacles and lead fulfilling lives as valued members of society.
          </p>
          <h1 className="font-marcellus text-5xl my-8 bg-white text-black w-fit p-4 rounded-lg">
            Vision
          </h1>
          <p className="text-2xl">
            We envision a society where all male children have access to
            education, healthcare, protection from violence and exploitation,
            and opportunities for personal and professional growth, regardless
            of their background or circumstances.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <h1 className="text-5xl font-marcellus mb-8 bg-white text-black w-fit p-4 rounded-lg">
              Objectives
            </h1>
            <ul className="text-2xl list-disc pl-8">
              <li>
                Establish community-level protection systems and raise awareness
                to prevent violence, abuse, and exploitation against male
                children.
              </li>
              <li>
                Provide comprehensive support including mentorship, education,
                and access to essential services to empower male children and
                enable them to realize their potential.
              </li>
              <li>
                Promote skills training, talent development, and economic
                opportunities to uplift vulnerable male children and foster
                their integration into society.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-5xl font-marcellus mb-8 bg-white text-black w-fit p-4 rounded-lg">
              Values
            </h1>
            <ul className="text-2xl list-disc pl-8">
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
                <em className="font-extrabold">Inclusivity:</em> We prioritize
                the inclusion of vulnerable male children in all our
                initiatives, ensuring that their voices are heard and their
                needs are addressed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
