import { Skill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(`http://localhost:3000/api/skills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
