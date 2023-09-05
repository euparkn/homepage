import axios from "axios";
import { API } from "api/apiConfig";

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BLOG_URL = process.env.REACT_APP_BLOG_URL;

// export const getPostList = async ({ page }: { page: string }) => {
//   const response = await API.get(`/apis/post/list`, {
//     params: {
//       access_token: ACCESS_TOKEN,
//       blogName: BLOG_URL,
//       output: "json",
//       page,
//     },
//     headers: {
//       "Content-Type": `application/json; charset=UTF-8`,
//       "Access-Control-Allow-Origin": "*",
//     },
//   });
//   return response.data;
// };

export const getPostList = async ({ page }: { page: string }) => {
  const response = await axios.get(`/mock/mock.json`);
  return response.data;
};
