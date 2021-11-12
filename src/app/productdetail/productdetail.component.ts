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

    constructor(public ps: ProductService, public route: ActivatedRoute) { }

    ngOnInit() {
        var id: number = this.route.snapshot.params['id']
        var pm: ProductModel = this.ps.productsPhone[id]

        this.name = pm.name
        this.price = pm.price
        this.url = pm.url
        this.desc = pm.desc
    }

}
