import { styled } from "styled-components";
import { IPost } from "types/type";

function Post({ info }: { info: IPost }) {
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
    border-top: 1px solid #ddd;
  }
  list-style: none;
  border-bottom: 1px solid #ddd;
`;

const Link = styled.a`
  width: 100%;
  display: block;
  padding: 12px 0;
  color: #111;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Date = styled.span`
  display: block;
  font-size: 0.85rem;
  line-height: 1.25rem;
  color: #777;
  font-weight: 500;
`;

export default Post;
