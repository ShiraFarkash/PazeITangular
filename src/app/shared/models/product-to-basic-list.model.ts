// import { Product } from "./product.models"

export class ProductToBasicList {
 ListId:number
 productID:number
 quantity:number
 productName:string
 isSelected:boolean=false

 constructor(ListId:number, productID:number,quantity:number,productName:string){
    this.ListId=ListId
    this.productID=productID
    this.quantity=quantity
    this.productName=productName
 }
}

