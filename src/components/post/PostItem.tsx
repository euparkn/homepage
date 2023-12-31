import { styled } from "styled-components";
import { Post } from "types/type";

import { Date } from "components/_atoms/atoms";

function PostItem({ info }: { info: Post }) {
  return (
    <List>
      <Link href={info.postUrl} target="_blank">
        {info.title}
        <Date>{info.date}</Date>
      </Link>
    </List>
  );
}

const List = styled.li`
  width: 100%;
  &:first-child {
    border-top: 1px solid ${(props) => props.theme.stroke};
  }
  list-style: none;
  border-bottom: 1px solid ${(props) => props.theme.stroke};
`;

const Link = styled.a`
  width: 100%;
  display: block;
  padding: 0.5rem 0;
  font-size: ${(props) => props.theme.fontSize.default};
  color: ${(props) => props.theme.font};
  line-height: ${(props) => props.theme.lineHeight.default};
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
  &:hover {
    border-width: 2px;
  }
`;

export default PostItem;
