import {IGeoAddressUser} from "./IGeoAddressUser";

export interface IAddressUser{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoAddressUser;
}
