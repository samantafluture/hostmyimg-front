export interface Upload {
  _id: string;
  name: string;
  size: number | string;
  url: string;
  createAt: string;
  user?: string;
  _v?: number;
}
export type Uploads = Array<Upload>;
