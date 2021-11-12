import { Injectable } from '@angular/core';
import { ProductModel } from './product.model'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productsPhone: ProductModel[] = [
        new ProductModel('Realme 5', 1800000, 0.1, 'realme_5.jpg', ['4 GB RAM', 'Qualcomm SDM665 Snapdragon 665', '128 GB Storage'], 'Realme 5 berbekal layar mini-drop fullscreen LCD 6.5", ditenagai Snapdragon 665, quad kamera belakang perangkat dan baterai 5000 mAh, Micro USB port.', false),
        new ProductModel('OPPO A1', 1400000, 0.15, 'oppo_a1.jpg', ['4 GB RAM','Mediatek MT6763T Helio P23','64 GB Storage'], 'OPPO A1 untuk kelas menengah dengan fitur Face recognition, layar 5.7 inci 18:9, RAM 4GB, memori internal 64GB dan baterai 3,180 mAh. Hadir dalam varian warna biru, merah dan putih.', false),
        new ProductModel('Samsung Galaxy S10', 1200000, 0, 'samsung10.jpg', ['8 GB RAM','Exynos 9820','512 GB Storage'], 'Samsung Galaxy A10 berlayar HD+ Infinity-V 6.2" dengan chipset Exynos 7884, kamera depan 5MP, kamera belakang 13MP, baterai berkapasitas 3400 mAh.', false),
        new ProductModel('Redmi Note 8', 1900000, 0.2, 'redmi_note_8.jpg', ['6 GB RAM','Qualcomm SDM665 Snapdragon 665','128 GB Storage'], 'Xiaomi Redmi Note 8 dibekali layar FHD+ 6.3 inci ditenagai prosesor Qualcomm Snapdragon 665 dipadukan Adreno 610 GPU, dan quad-camera 48MP + 8MP + 2MP + 2MP.', false),
        new ProductModel('Iphone X', 6300000, 0.25, 'iphone_x.jpg', ['3 GB RAM','Apple A11 Bionic','256 GB Storage'], 'Apple iPhone X berlayar super retina 5.8" dengan design tanpa tombol Home, dibekali teknologi sekuriti terbaru Face ID membantu mengunlock, melakukan pembayaran hanya dengan menggunakan wajah Anda.', false)
    ]

    constructor() { }
}
