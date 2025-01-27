import React from "react";

import Project from "./Project.jsx";
import Experience from "./Experience.jsx";
import Link from "./Link.jsx";

function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-aquamarine-900 from-5% to-aquamarine-1000 to-40%">
      <main className="max-w-[450px] md:max-w-[600px] flex flex-col gap-16 p-8 pt-24 text-white font-text">
        {/* profile */}
        <section>
          <div className="flex items-center gap-4">
            <div className="bg-blue-300 w-40 h-40 rounded-full flex-shrink-0 bg-cover bg-center bg-[url('./pfp.jpg')]" />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-text">
                Juan Gutierrez Moreno
              </h1>
              <p>Web Developer</p>
            </div>
          </div>
        </section>

        {/* about */}
        <section>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">About</h2>

            <p>
              I'm Juan, a fourth-year Computer Science major at the University
              of Toronto, with minors in Mathematics and Geographic Information
              Systems. I have a passion for web development, with hands-on
              experience in building responsive web applications.
            </p>
          </div>
        </section>

        {/* work experience */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl">Work Experience</h2>

          <Experience
            start="July 2025"
            end="Present"
            title="SDE I @ GoDaddy 🩵"
            desc="Rejoining the wonderful WPEX team to continue to enhance customer engagement, onboarding efficiency, and retention."
            tech="Frontend • React • JavaScript"
          />

          <Experience
            start="May 2024"
            end="Aug 2024"
            title="Software Development Intern @ GoDaddy 🩵"
            desc="Worked with the WPEX team to conduct several A/B testing experiments, enhancing customer engagement, onboarding efficiency, and retention."
            tech="Frontend • React • JavaScript"
          />

          <Experience
            start="May 2022"
            end="Aug 2023"
            title="Software Engineer Intern @ Environment and Climate Change Canada 🍁"
            desc="Developed a project management web application for Environment Canada, engaging in the entire product life cycle, from concept to development, QA, and deployment."
            tech="Frontend • JavaScript • Powerapps"
          />
        </section>

        {/* side projects */}
        <section>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Side Projects</h2>

            <Project
              year="2025"
              title="Memory Lane 🐘"
              desc="AI assisted dementia reminiscence therapy"
              tech="React • Flask • TTS"
              url="https://github.com/juan-josue/memory-lane"
              img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/232/550/datas/gallery.jpg"
            />

            <Project
              year="2024"
              title="Ornipedia 🕊️"
              desc="AI bird image classification and sighting tracker"
              tech="React • Flask • Tensorflow"
              url="https://github.com/juan-josue/ornipedia"
              img="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg"
            />

            <Project
              year="2024"
              title="Tracktion 👾"
              desc="AI bird image classification and sighting tracker"
              tech="React • Node • JWT"
              url="https://github.com/juan-josue/Tracktion"
              img="https://devpost.com/software/memory-lane-pa6cqu"
            />
          </div>
        </section>

        {/* socials */}
        <section>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Socials</h2>

            <Link
              url=""
              text="juan.gutierrez@mail.utoronto.ca"
              platform="Email"
            />

            <Link
              url="https://www.linkedin.com/in/juangutierrez/"
              text="/in/juangutierrez"
              platform="LinkedIn"
            />

            <Link
              url="https://github.com/juan-josue"
              text="github.com/juan-josue"
              platform="Github"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
