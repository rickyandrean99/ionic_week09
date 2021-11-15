import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

@Component({
    selector: 'app-productdetail',
    templateUrl: './productdetail.component.html',
    styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
    name: string = ''
    price: number = 0
    url: string = ''
    desc: string = ''
    id: number = undefined

    constructor(public ps: ProductService, public route: ActivatedRoute) { }

    getProductDetail() {
        this.ps.productDetail(this.id).subscribe(
            (data) => {
                this.name = data.name
                this.price = data.price
                this.url = data.url
                this.desc = data.desc
            }
        )
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id']
        this.getProductDetail()
    }

}
