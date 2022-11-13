export class BasicList {
    Id:number
    userID:number
    listName:string | undefined

    constructor(Id:number, userID:number, listName?:string){
        this.Id=Id;
        this.userID=userID;
        listName=undefined? undefined :listName
    }
}
