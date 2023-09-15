import { useState } from "react";

import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import { PostDataDTO } from "types/type";
import { getPostList } from "api/api";

import Loading from "components/_atoms/Loading";
import Error from "components/_atoms/Error";
import PostItem from "components/post/PostItem";
import PostTitle from "components/post/PostTitle";

function PostList() {
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
    return <Error code={err.code} text={err.message} />;
  }

  const { posts } = data;

  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} info={post} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  overflow: auto;
`;

export default PostList;
