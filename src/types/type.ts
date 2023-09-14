export type PostDataDTO = {
  tistory: {
    status: string;
    item: IItem;
  };
};

export interface IItem {
  count: string;
  page: string;
  posts: IPost[];
  secondaryUrl: string;
  totalCount: string;
  url: string;
}

export interface IPost {
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
