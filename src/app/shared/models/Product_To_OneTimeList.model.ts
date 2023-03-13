export class Product_To_OneTimeList{
    OneTimeListID:number
    productID:number
    isTaken:boolean
    quantity:number
    constructor(OneTimeListID:number,productID:number, isTaken:boolean, quantity:number){
        this.OneTimeListID=OneTimeListID;
        this.productID=productID
        this.isTaken=isTaken
        this.quantity=quantity;
    }
}