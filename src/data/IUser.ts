export interface IUser {
  id: number;
  name: string;
  username: string;
}

export const instanceOfUser = (object: any): object is IUser => {
  return 'name' in object;
};

export const instanceOfUserArray = (object: any): object is IUser[] => {
  return object.length > 0 && instanceOfUser(object[0]);
};
