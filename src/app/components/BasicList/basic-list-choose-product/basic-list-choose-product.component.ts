import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { BasicList } from 'src/app/shared/models/basic-list.model';
@Component({
  selector: 'app-basic-list-choose-product',
  templateUrl: './basic-list-choose-product.component.html',
  styleUrls: ['./basic-list-choose-product.component.css']
})
export class BasicListChooseProductComponent implements OnInit {
  allMainProduct:Array<Product>=new Array<Product>;
  allMyProducts:Array<Product>=new Array<Product>;
  menuList=[false,false, false,true,false ]
  editable:boolean=false
  listName:string="Must Have"
  tooltip="click to edit and clcik again to save changes"
  clickedOnProduct=false
  // allChosenProduct:Array<Product>=new Array<Product>;
  
  chosenMod: string = "";
  search: string = "";
  i:number=0;

  constructor(private productService: ProductService, private router:Router,private ElByClassName: ElementRef) { }
 
  ngOnInit(): void {
    this.productService.gatMainProduct().subscribe(
      data=>{this.allMainProduct=data}
    );

    
  }
  ngAfterViewInit(){
  }

  setActiveLink(n: number, navigateTo:string) {

    for (let index = 0; index < this.menuList.length; index++) {
      this.menuList[index] = false;
    }
    this.menuList[n] = true
    console.log(this.menuList)
  this.router.navigate(["/"+navigateTo])
  }
  editableClick(s:string){
    this.editable=!this.editable
    this.listName=s

  }

  sortByName(){
    this.allMainProduct.sort((a,b) => a.productName.localeCompare(b.productName));
    console.log(this.allMainProduct[0].productName)
    console.log(this.allMainProduct)
  }
  searchForItem() {
    // console.log('Search Item: ' + this.search);
    for(this.i=0;this.i<=this.allMyProducts.length;this.i++){
       if(this.allMyProducts[this.i].productName==this.search){
        console.log(this.allMyProducts[this.i].productName)
        
       }
      }}

      modoNorC() {
        switch (this.chosenMod) {
          case "mod1": {
            this.allMainProduct.sort((a, b) => a.productName.localeCompare(b.productName));
            console.log(this.allMainProduct[0].productName)
            console.log(this.allMainProduct)
            break;
          }
          case "mod2": {
            //do something
            break;
          }
        }
      }   
      
 selectedParent:number=0;
 
 getAllProducts(p:Product){
  this.productService.GatProductsByMainProduct(p).subscribe(
    data=>{
      this.allMyProducts=data;
      console.log(this.allMyProducts)
      this.selectedParent=p.Id!;

      if(!(p.Id! in this.productService.selectedProducts))
      this.productService.selectedProducts[p.Id!]= data.map((d:Product)=>new ProductToBasicList(0,d.Id!,0,d.productName))
    }
  );
  this.clickedOnProduct=true;
  console.log(this.clickedOnProduct)

 }
 contantListID:number=0
 done(){
  let userId=Number(localStorage.getItem("userId"))
  let b:BasicList=new BasicList()
  b.name=this.listName
  b.userID=userId

  let productToList:ProductToBasicList[]=[]
  this.productService.addContantList(b).subscribe(data=>{
    localStorage.setItem("contantListName",String(data))
    this.contantListID=data
    console.log(data)
 for(let key of  Object.keys(this.productService.selectedProducts)){
   productToList= productToList.concat(this.productService.selectedProducts[Number(key)].filter(p=>p.isSelected));

 }
 productToList.forEach(element => {
  element.constantListID=this.contantListID
 });


  console.log(productToList);
  debugger
  this.productService.addProductToContantList(productToList).subscribe()
  this.router.navigate(['/listOfAllMyBasicLists']);
  })

 }


}
