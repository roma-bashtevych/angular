import {IAddressUser} from "./IAddressUser";
import {ICompanyUser} from "./ICompanyUser";

export interface IUser{
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressUser;
  phone: string;
  website: string;
  company: ICompanyUser;
}
