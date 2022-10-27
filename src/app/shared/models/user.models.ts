export class User {
    Id: number | undefined
    userName: string
    userLastName: string | undefined
    email: string
    password: string 
     
    constructor(
        useName:string
        ,email:string, password:string ,id?:number, userLastName?:string ){
        this.Id=undefined?undefined:id;
        this.userName=useName;
        this.userLastName=undefined?undefined:userLastName;
        this.email=email;
        this.password=password ;
    }
    

}

