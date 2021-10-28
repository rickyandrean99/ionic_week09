import { Component, OnInit } from '@angular/core';

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

    products = [
        { 
            name: 'Realme 5',
            price: 1800000,
            disc: 0.1,
            url: 'realme_5.jpg',
            spec: ['4 GB RAM', 'Qualcomm SDM665 Snapdragon 665', '128 GB Storage'],
            open: false
        },
        {
            name: 'OPPO A1',
            price: 1400000,
            disc: 0.15,
            url: 'oppo_a1.jpg',
            spec: ['4 GB RAM','Mediatek MT6763T Helio P23','64 GB Storage'],
            open: false
        },
        { 
            name: 'Samsung Galaxy S10', 
            price: 1200000,
            disc: 0, 
            url: 'samsung10.jpg',
            spec: ['8 GB RAM','Exynos 9820','512 GB Storage'],
            open: false
        },
        { 
            name: 'Redmi Note 8', 
            price: 1900000,
            disc: 0.2, 
            url: 'redmi_note_8.jpg',
            spec: ['6 GB RAM','Qualcomm SDM665 Snapdragon 665','128 GB Storage'],
            open: false
        },
        { 
            name: 'Iphone X', 
            price: 6300000, 
            disc: 0.25, 
            url: 'iphone_x.jpg',
            spec: ['3 GB RAM','Apple A11 Bionic','256 GB Storage'],
            open: false
        }
    ]

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

    constructor() { }

    ngOnInit() { }
}
