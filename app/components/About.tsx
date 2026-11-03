import React from "react";

const About = () => {
  return (
    <section
      className="flex-1 min-h-screen opacity-70 lg:px-12 px-6 lg:py-4"
      id="about"
    >
      <div className="lg:flex lg:items-center lg:justify-center lg:flex-col gap-8 mt-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-16">
          <div className="space-y-24">
            <div>
              <h1 className="lg:text-5xl text-xl font-marcellus lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg">
                About Us
              </h1>
              <p className="lg:text-2xl text-lg">
                Based in Bondo (Siaya County), Best Outcomes Youth Solace (BOYS)
                is a non-profit organization dedicated to empowering boys and
                young men through mentorship, education, psychosocial support,
                skills development and economic empowerment. The organisation
                promotes positive masculinity, emotional wellbeing, gender
                equality, respect for women and girls, and responsible
                leadership, helping boys grow into confident, skilled,
                responsible and productive members of society.
              </p>
            </div>

            
          </div>
          <div className="bg-about-2 bg-cover bg-center rounded-xl" />
        </div>
        <h1 className="font-marcellus lg:text-5xl text-xl lg:mb-8 mb-4 bg-white text-black w-fit lg:p-4 p-2 rounded-lg lg:gap-8 lg:mt-16">
          Problem Statement
        </h1>
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="max-lg:mt-8">
            <p className="lg:text-2xl text-lg max-lg:min-w-screen-md p-4">
              In many communities, including Bondo Sub-County, boys grow up
              facing societal expectations to be strong, self-reliant, dominant
              and future providers, often without adequate guidance, protection,
              mentorship and opportunities to develop into responsible,
              emotionally healthy adults. Their vulnerabilities are frequently
              overlooked, leaving many exposed to abuse, neglect, exploitation
              and other social challenges. <br />
              <br />
              Cultural norms that discourage boys from expressing emotions or
              seeking help often undermine their emotional development, empathy
              and ability to manage conflict constructively. Poverty, family
              instability and limited access to education, healthcare and
              mentorship further expose some boys to school dropout, child
              labour, substance abuse, crime and other harmful environments.
              <br />
              <br /> The rising cases of gender-based violence and femicide in
              Kenya also highlight the urgent need to rethink how boys are
              socialised and prepared for adulthood. Harmful expressions of
              masculinity, aggression, entitlement, poor emotional regulation
              and disrespect towards women and girls must be addressed early.
              Boys need guidance to understand that positive masculinity is
              founded on responsibility, integrity, empathy, self-discipline,
              respect and accountability rather than dominance, control or
              aggression.
            </p>
          </div>
          <div className="max-lg:mt-8">
            <p className="lg:text-2xl text-lg max-lg:min-w-screen-md p-4">
              Economic vulnerability compounds these challenges, with many boys
              leaving school without marketable skills, career guidance or
              access to vocational training and entrepreneurship opportunities.
              Furthermore, inadequate support systems, including counselling,
              educational assistance, child protection services and safe spaces,
              leave many without the resources they need to overcome these
              challenges. <br />
              <br />
              There is therefore an urgent need for holistic and sustainable
              interventions that protect and empower the boychild through
              education, psychosocial support, mentorship, life skills,
              vocational training and economic empowerment. These interventions
              must deliberately promote positive masculinity, gender equality,
              non-violence, respect for women and girls, emotional intelligence
              and responsible citizenship.
              <br />
              <br /> <span className="font-semibold">
                Investing in the boychild is not a competition with the
                girlchild; it is an investment in responsible men, healthier
                families, safer communities and a more equitable society.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
