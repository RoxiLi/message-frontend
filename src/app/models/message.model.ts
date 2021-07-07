import {User} from "./user.model";

export interface Message {
  _id: String;
  user: User;
  message: String ;
  date: Date;

}
