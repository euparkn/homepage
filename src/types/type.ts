export type PostDataDTO = {
  tistory: {
    status: string;
    item: Item;
  };
};

export interface Item {
  count: string;
  page: string;
  posts: Post[];
  secondaryUrl: string;
  totalCount: string;
  url: string;
}

export interface Post {
  categoryId: string;
  comments: string;
  date: string;
  id: string;
  postUrl: string;
  title: string;
  trackbacks: string;
  visibility: string;
}

export interface Size {
  width: number;
  height: number;
}
