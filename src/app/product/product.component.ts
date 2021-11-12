import { Component, OnInit, Input } from '@angular/core'
import { ProductService } from '../product.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    productName: string = 'Gadget Masa Kini'
    productPrice: number = 8000000
    productImg: string = '../assets/img/galaxynote20.jpg'
    btnDisable: boolean = true
    btnColor = 'primary'
    netPrice: number = this.productPrice
    fontSize: number = 12
    products = []

    showClick(index: number) {
        if (this.products[index].open)
            this.products[index].open = false
        else
            this.products[index].open = true
    }

    checkVoucher(event: Event) {
        var element = event.target as HTMLInputElement
        if (element.value == "007") this.btnDisable = false
    }

    applyDiscount() {
        this.netPrice = this.discountPrice()
        this.btnDisable = true
    }

    discountPrice(): number {
        return this.productPrice * 0.8
    }

    constructor(public ps:ProductService) { }

    ngOnInit() {
        this.products = this.ps.productsPhone
    }
}
