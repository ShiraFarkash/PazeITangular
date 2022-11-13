import { Product } from "./product.models"

export class ProductToBasicList {
 Id:number
 productID:number
 quantity:number
 productName:string
 isSelected:boolean=false
 constructor(Id:number, productID:number,quantity:number,productName:string){
    this.Id=Id
    this.productID=productID
    this.quantity=quantity
    this.productName=productName
 }
}

