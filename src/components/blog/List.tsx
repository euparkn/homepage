import { useQuery } from "@tanstack/react-query";
import { getPostList } from "api/api";
import { useEffect } from "react";
import Figure from "components/blog/Figure";
import { styled } from "styled-components";

function BlogList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getPostList"],
    queryFn: () => getPostList({ page: "1" }),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <List>
      <Figure />
      <Figure />
      <Figure />
      <Figure />
      <Figure />
      <Figure />
    </List>
  );
}

const List = styled.div``;

export default BlogList;
