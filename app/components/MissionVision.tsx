import React from "react";

const MissionVision = () => {
  const coreValues = [
    {
      name: "Protection",
      description:
        "The safety and dignity of every boy come first, and we act quickly when a child is at risk.",
    },
    {
      name: "Respect",
      description:
        "We treat every boy, family and partner with dignity, and we teach respect for others, especially women and girls.",
    },
    {
      name: "Acountability",
      description:
        "We take responsibility for our actions and teach boys to do the same.",
    },
    {
      name: "Integrity",
      description:
        "We are honest, transparent and trustworthy with the boys, families, donors and partners who rely on us.",
    },
    {
      name: "Inclusion",
      description:
        "Every boy is welcome regardless of background, ability, religion, ethnicity or circumstance.",
    },
    {
      name: "Compassion",
      description:
        "We listen without judgement and make it safe for boys to speak about their struggles.",
    },
    {
      name: "Empowerment",
      description:
        "We build skills, confidence and self-belief so boys can shape their own futures.",
    },
    {
      name: "Hard Work and Discipline",
      description:
        "We model and encourage perseverance, responsibility and commitment to goals.",
    },
    {
      name: "Hope and Second Chances",
      description:
        "No boy is written off. A setback is not the end of his story.",
    },
    {
      name: "Community and Partnership",
      description:
        "We succeed together with parents, mentors, schools, leaders and partner organisations.",
    },
  ];

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
            A society where every boy and young man, regardless of background or
            circumstance, has access to education and healthcare, is protected
            from violence and exploitation, and has the opportunity to grow
            personally and professionally into a responsible, valued member of
            the community.
          </p>
        </div>
        <div className="bg-mission-1 bg-cover bg-center rounded-lg" />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-16">
        <div className="bg-mission-2 bg-cover bg-center rounded-lg" />
        <div className="lg:flex lg:flex-col lg:gap-8 space-y-4 max-lg:mt-8">
          <div>
            <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
              Objectives
            </h1>
            <ul className="lg:text-2xl text-xl list-disc lg:pl-8 pl-4 space-y-4">
              <li>
                <em className="font-extrabold">Protect:</em> Establish
                community-level protection systems and raise awareness to
                prevent violence, abuse and exploitation against boys and young
                men.
              </li>
              <li>
                <em className="font-extrabold">Support:</em> Provide
                comprehensive support, including mentorship, education,
                psychosocial care and access to essential services, so that boys
                can overcome obstacles and realise their potential.
              </li>
              <li>
                <em className="font-extrabold">Empower:</em> Promote skills
                training, talent development and economic opportunities that
                uplift vulnerable boys and young men and help them become
                productive, integrated members of society.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:mt-16 mt-4">
        <h1 className="lg:mx-auto lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
          Values
        </h1>
        <ul className="lg:text-2xl text-xl list-disc lg:pl-8 pl-4 space-y-4">
          {coreValues.map((value) => (
            <li key={value.name}>
              <em className="font-extrabold">{value.name}:</em>{" "}
              {value.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MissionVision;
