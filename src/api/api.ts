import { API } from "api/apiConfig";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BLOG_URL = process.env.REACT_APP_BLOG_URL;

export const getPostList = async ({
  page,
  count,
}: {
  page: string;
  count: string;
}) => {
  const response = await API.get(`/apis/post/list`, {
    params: {
      access_token: ACCESS_TOKEN,
      blogName: BLOG_URL,
      output: "json",
      page,
      count,
    },
  });
  return response.data;
};
