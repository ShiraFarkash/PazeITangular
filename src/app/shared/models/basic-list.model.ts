export class BasicList {
    Id:number | undefined
    userID:number| undefined
    name:string | undefined

    constructor( userID?:number,Id?:number, name?:string){
        this.Id=undefined? undefined:Id;
        this.userID=undefined? undefined:userID;
        name=undefined? undefined :name
    }
}
