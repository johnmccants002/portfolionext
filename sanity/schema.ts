import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import pageInfo from "./schemas/pageInfo";
import author from "./schemas/author";
import social from "./schemas/social";
import skill from "./schemas/skill";
import project from "./schemas/project";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, project, experience, skill],
};
