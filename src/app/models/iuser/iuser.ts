import {IaddressUsers} from "./iaddressUsers";
import {IcompanyUsers} from "./icompanyUsers";

export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IaddressUsers;
  phone: string;
  website: string;
  company: IcompanyUsers
}
