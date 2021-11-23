import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product.service'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

    options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    addProduct() {
        this.ps.newProduct(this.productName, this.productPrice, this.productDisc / 100, this.productUrl, 'Ini Deskripsi').subscribe(
            (data) => {
                alert(data.pesan);
            }
        )
    }

    ambilFoto() {
        this.camera.getPicture(this.options).then(
            (imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.productUrl = base64Image;
            }, (err) => {
                // kalau error
            }
        );
    }


    constructor(public ps: ProductService, public camera: Camera) { }

    ngOnInit() { }

}
