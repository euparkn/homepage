import { useState } from "react";

import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import { PostDataDTO } from "types/type";
import { getPostList } from "api/api";

import Loading from "components/common/Loading";
import Error from "components/common/Error";
import Post from "components/blog/Post";
import PostTitle from "components/blog/PostTitle";

function BlogList() {
  const [searchOption] = useState({ page: "1", count: "5" });

  const {
    data: originData,
    error,
    isLoading,
  } = useQuery<PostDataDTO>({
    queryKey: ["getPostList", searchOption],
    queryFn: () => getPostList(searchOption),
    retry: 0,
  });

  const data = originData?.tistory.item;
  const err = error as AxiosError;

  if (isLoading) {
    return <Loading />;
  }

  if (!data || error) {
    return (
      <Error code={err.response?.status} text={err.response?.statusText} />
    );
  }

  const { posts } = data;

  return (
    <Container>
      <PostTitle />
      <ul>
        {posts.map((post) => (
          <Post key={post.id} info={post} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default BlogList;
