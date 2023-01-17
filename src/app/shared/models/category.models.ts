export class Category {
    Id:number | undefined
    categoryName:string
    
    constructor(categoryName:string,Id?:number)
    {
        this.Id=undefined?undefined : Id
        this.categoryName=categoryName 
    }

}
