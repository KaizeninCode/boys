import React from "react";

const Programs = () => {
  const programs = [
    {
      name: "Boychild Mentorship",
      description:
        "Character, confidence, discipline, leadership and life direction.",
    },
    {
      name: "Education Support",
      description:
        "School retention, scholarships, academic mentorship and career guidance.",
    },
    {
      name: "Mental & Psychosocial Wellbeing",
      description:
        "Emotional support, counselling, peer support and resilience.",
    },
    {
      name: "Skills & Economic Empowerment",
      description:
        "Vocational skills, entrepreneurship, employment and apprenticeships.",
    },
    {
      name: "Protection & Safeguarding",
      description:
        "Preventing abuse, exploitation, violence, substance abuse and harmful environments.",
    },
    {
      name: "Sports, Talent & Creative Development",
      description:
        "Football, athletics, music, arts, debate and other talents.",
    },
    {
      name: "Young Men for Community",
      description:
        "Volunteerism, civic responsibility, leadership and community service.",
    },
    {
      name: "Positive Masculinity",
      description:
        "Values, attitudes and behaviours of responsible, respectful and constructive manhood.",
    },
  ];

  const programWorks = [
    {
      name: "Boychild Mentorship",
      description:
        "Boys are matched with carefully screened adult mentors who guide them over an extended period. Mentors include professionals from many fields, skilled tradespeople, religious and community leaders, sports personalities and other respected members of society.",
    },
    {
      name: "Education Support",
      description:
        "Supports boys at risk of dropping out, and helps those who already have find their way back.",
    },
    {
      name: "Mental & Psychosocial Wellbeing",
      description:
        "Society often leaves boys with nowhere to take their problems. We encourage them to talk, and we partner with and refer them to qualified counsellors, psychologists, hospitals and other professionals.",
    },
    {
      name: "Skills & Economic Empowerment",
      description:
        "Through partnerships with vocational training institutions and other organisations, we work to make sure every participating boy gains at least one practical, employable skill.",
    },
    {
      name: "Protection & Safeguarding",
      description:
        "We work to prevent abuse, exploitation, violence, substance abuse and harmful environments, so that every boy can thrive.",
    },
    {
      name: "Sports, Talent & Creative Development",
      description:
        "Soccer, athletics, music, arts, debate and other talents give boys a place to shine and belong.",
    },
    {
      name: "Young Men for Community",
      description:
        "Volunteerism, civic responsibility, leadership and community service turn young men into contributors to the places they call home.",
    },
    {
      name: "Positive Masculinity",
      description:
        "Our Positive Masculinity and Responsible Manhood pillar guides boys and young men in building values, attitudes and behaviours that are responsible, respectful and constructive.",
    },
  ];

  return (
    <section className="flex-1 min-h-screen opacity-70 lg:px-12 px-6 lg:py-4">
      <div className="lg:mt-16 mt-4">
        <h1 className="mx-auto lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
          Program Pillars
        </h1>
        <ul className="lg:text-2xl text-xl list-disc lg:pl-8 pl-4 space-y-4">
          {programs.map((value) => (
            <li key={value.name}>
              <em className="font-extrabold">{value.name}:</em>{" "}
              {value.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:mt-16 mt-4">
        <h1 className="mx-auto lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
          How Each Pillar Works
        </h1>
        <ul className="lg:text-2xl text-xl list-disc lg:pl-8 pl-4 space-y-4">
          {programWorks.map((value) => (
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

export default Programs;
