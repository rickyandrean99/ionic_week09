import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cegahcovid',
    templateUrl: './cegahcovid.component.html',
    styleUrls: ['./cegahcovid.component.scss'],
})
export class CegahcovidComponent implements OnInit {
    btnColor = ['success','warning','danger']
    image: string = "../assets/img/1.jpg"

    changeImage (id) {
        if (id == 1)
            this.image = "../assets/img/1.jpg"
        else if (id == 2)
            this.image = "../assets/img/2.jpg"
        else if (id == 3)
            this.image = "../assets/img/3.jpg"
    }

    constructor() { }

    ngOnInit() { }
}
