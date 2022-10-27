export class Product {
   Id:number | undefined
   productName: string
   productID :number|undefined
   categoryID: number
   barcode : string|undefined
     
    constructor(productName:string,categoryID:number, id?:number
        ,productID?:number,barcode?:string){
            this.Id=undefined? undefined : id
            this.productName = productName
            this.productID = undefined?undefined:productID
            this.categoryID = categoryID
            this.barcode = undefined? undefined : barcode
        }
      

    

}