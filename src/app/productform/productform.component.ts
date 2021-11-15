import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product.service'

@Component({
    selector: 'app-productform',
    templateUrl: './productform.component.html',
    styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {
    productName: string = ''
    productPrice: number = 0
    productUrl: string = ''
    productDisc: number = 0

    addProduct() {
        this.ps.newProduct(this.productName, this.productPrice, this.productDisc / 100, this.productUrl, 'Ini Deskripsi').subscribe(
            (data) => {
                alert(data.pesan);
            }
        )
    }

    constructor(public ps: ProductService) { }

    ngOnInit() { }

}
