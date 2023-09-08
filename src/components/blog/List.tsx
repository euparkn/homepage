import { useQuery } from "@tanstack/react-query";

import { styled } from "styled-components";

import { PostDataDTO } from "types/type";
import { getPostList } from "api/api";

import { useState } from "react";
import Post from "components/blog/Post";
import { SectionLink, SectionTitle } from "assets/styles/common";

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
    <Container>
      <TitleWrapper>
        <SectionTitle>Post</SectionTitle>
        <SectionLink href={data.url} target="_blank">
          more...
        </SectionLink>
      </TitleWrapper>
      <List>
        {posts.map((post) => (
          <Post key={post.id} info={post} />
        ))}
      </List>
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

const TitleWrapper = styled.div``;

const List = styled.div``;

export default BlogList;
