export type TUser = {
  id: string;
  created: number;
  karma: number;
  about?: string;
  submitted?: number[];
};

export type TItem = {
  id: number;
  deleted?: boolean;
  type?: string;
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
  user?: TUser | null;
};
