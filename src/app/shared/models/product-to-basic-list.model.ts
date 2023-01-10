// import { Product } from "./product.models"

export class ProductToBasicList {
 constantListID:number
 productID:number
 quantity:number
 productName:string
 isSelected:boolean=false

 constructor(constantListID:number, productID:number,quantity:number,productName:string){
    this.constantListID=constantListID
    this.productID=productID
    this.quantity=quantity
    this.productName=productName
 }
}

