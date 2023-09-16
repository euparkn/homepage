import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getProjectList } from "api/api";
import { Project } from "types/type";

import Error from "components/_atoms/Error";
import Loading from "components/_atoms/Loading";
import styled from "styled-components";

function ProjectList() {
  const { data, error, isLoading } = useQuery<Project[]>({
    queryKey: ["getProjectList"],
    queryFn: getProjectList,
    retry: 0,
  });

  const err = error as AxiosError;

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data || error) {
    return <Error code={err.code} text={err.message} />;
  }

  return (
    <Container>
      {data.map((e) => (
        <li key={e.id}>{e.title}</li>
      ))}
    </Container>
  );
}

const Container = styled.ul``;

export default ProjectList;
