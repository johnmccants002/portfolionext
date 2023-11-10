import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`http://localhost:3000/api/pageinfo`);
  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
