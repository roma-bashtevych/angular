import {IgeoAddressUsers} from "./igeoAddressUsers";

export interface IaddressUsers{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IgeoAddressUsers;
}
