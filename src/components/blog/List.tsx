import { useQuery } from "@tanstack/react-query";

import { styled } from "styled-components";

import { PostDataDTO } from "types/type";
import { getPostList } from "api/api";

import Figure from "components/blog/Figure";
import { useState } from "react";

function BlogList() {
  const [searchOption] = useState({ page: "1", count: "5" });

  const {
    data: originData,
    error,
    isLoading,
  } = useQuery<PostDataDTO>({
    queryKey: ["getPostList", searchOption],
    queryFn: () => getPostList(searchOption),
  });

  const data = originData?.tistory.item;

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!data || error) {
    return <div>error</div>;
  }

  const { posts } = data;

  return (
    <List>
      {posts.map((post) => (
        <Figure key={post.id} info={post} />
      ))}
    </List>
  );
}

const List = styled.div``;

export default BlogList;
