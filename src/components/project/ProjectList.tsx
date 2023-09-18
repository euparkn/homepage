import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getProjectList } from "api/api";
import { Project } from "types/type";

import Error from "components/_atoms/Error";
import Loading from "components/_atoms/Loading";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const { data, error, isLoading } = useQuery<Project[]>({
    queryKey: ["getProjectList"],
    queryFn: getProjectList,
  });

  const err = error as AxiosError;

  if (!data || isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error code={err.code} text={err.message} />;
  }

  const renderItems = () => {
    const arr = [];
    if (data.length < 4) {
      for (let i = 0; i < 4 - data.length; i += 1) {
        arr.push(<ProjectItem key={i} />);
      }
    }
    return arr;
  };

  return (
    <Container>
      {data.map((project) => (
        <ProjectItem key={project.id} info={project} />
      ))}
      {renderItems()}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -4px;
  @media screen and (max-width: 540px) {
    flex-wrap: wrap;
  }
  @media screen and (max-height: 564px) {
    flex-wrap: nowrap;
  }
`;

export default ProjectList;
