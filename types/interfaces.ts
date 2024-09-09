export interface IUserData {
  email: string,
  password: string
};


export interface IAdmin extends IUserData{
  id: number,
  name: string
}