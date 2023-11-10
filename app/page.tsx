import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchSkills } from "@/utilities/fetchSkills";
import { fetchSocials } from "@/utilities/fetchSocials";
import { fetchProjects } from "@/utilities/fetchProjects";
import { fetchExperiences } from "@/utilities/fetchExperiences";
import { fetchPageInfo } from "@/utilities/fetchPageInfo";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = async () => {
  // const pageInfo = await client.fetch(`*[_type == "pageInfo"]`);

  // console.log(pageInfo);
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await client.fetch(
    `
    *[_type == "experience"]{
        ...,
        technologies[]->{ title, image, progress }
    }
`
  );
  const projects: Project[] = await client.fetch(`*[_type == "project"][]`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"][]`);
  const socials: Social[] = await fetchSocials();

  console.log(projects, "PROJECTS");
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0077be]">
      <Head>
        <title>John's Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://i.imgur.com/e2yvD6A.png"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const projects: Project[] = await fetchProjects();
//   const skills: Skill[] = await fetchSkills();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       projects,
//       skills,
//       socials,
//     },
//     revalidate: 10,
//   };
// };
