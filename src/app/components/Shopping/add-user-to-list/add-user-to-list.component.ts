import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductToBasicList } from 'src/app/shared/models/product-to-basic-list.model';
import { Product } from 'src/app/shared/models/product.models';
import { User } from 'src/app/shared/models/user.models';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-user-to-list',
  templateUrl: './add-user-to-list.component.html',
  styleUrls: ['./add-user-to-list.component.css']
})
export class AddUserToListComponent implements OnInit {

  @Input() showPage = false
  @Input() Products: Array<Product> = new Array<Product>()
  @Input() parentId: number = 0

  // @Output() ALLchosenProduct=new EventEmitter<Array<Product>>()
  @Output() show = new EventEmitter<boolean>();
  @Output() count = new EventEmitter<number>();
  @Output() UserEmailCount=new EventEmitter<number>();
  // ChosenProduct:Array<Product>=new Array<Product>()
  userEmail=new Array<User>();
  constructor(public productService: ProductService ,private UserService:UserService) { }

  ngOnInit(): void {

  }

  addORincOne(plus: number, i: number) {

    let qty = this.productService.selectedProducts[this.parentId][i].quantity + plus
    if (qty >= 0 && (plus == 1 || plus == -1)) {
      this.productService.selectedProducts[this.parentId][i].quantity += plus
      this.productService.selectedProducts[this.parentId][i].isSelected = true
      if (qty == 0)
        this.productService.selectedProducts[this.parentId][i].isSelected = false
    }
    // console.log(this.productService.selectedProducts[this.parentId][i])
    else if (this.productService.selectedProducts[this.parentId][i].quantity < 0) {
      this.productService.selectedProducts[this.parentId][i].quantity = 0
      this.productService.selectedProducts[this.parentId][i].isSelected = false
    }

  
  }

  getUsersEmails(email:String){
      this.UserService.GetUserEmail(email).subscribe(data=>{
        this.userEmail=data
      })
  }
  closeDiv() {
    this.showPage = false;
    //  this.ALLchosenProduct.emit(this.ChosenProduct)
    this.show.emit(false)
    let quntity = 0
      this.count.emit(quntity)
    }

    addUserToMyList(u:User){
      
    }

  // addProduct(i:number, btName:string){
  //   this.productService.selectedProducts[this.parentId][i].quantity+=1

  // this.productService.selectedProducts[this.parentId][i].isSelected=!this.productService.selectedProducts[this.parentId][i].isSelected

  //  }


}

