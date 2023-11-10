export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      description: "Progress of skill from 0-100%",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
