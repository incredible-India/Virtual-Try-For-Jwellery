export interface IUserLogin{
    email : string,
    password: string
}

export interface IUser {
    name: string;
    mobile: string;
    email: string;
    password: string;
  }
  
  export class User implements IUser {
    constructor(
      public name: string,
      public mobile: string,
      public email: string,
      public password: string
    ) {}
  }
  

  export class UserLogin implements IUserLogin{

    constructor(
        public email : string,
        public password :string      
    ){}
  }