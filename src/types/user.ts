export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
  [x: string]: any;
}
