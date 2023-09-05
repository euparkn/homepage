import { IPost } from "types/type";

function Figure({ info }: { info: IPost }) {
  return (
    <figure>
      <h6>{info.title}</h6>
      <p>{info.date}</p>
    </figure>
  );
}

export default Figure;
