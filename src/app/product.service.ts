import { Injectable } from '@angular/core';
import { ProductModel } from './product.model'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productList(): Observable<any> {
        return this.http.get("http://localhost/Hybrid%20Mobile%20Programming/ionicangular/products.php")
    }

    productDetail(id: number): Observable<any> {
        let param = new HttpParams().append('id', id)
        return this.http.get("http://localhost/Hybrid%20Mobile%20Programming/ionicangular/product_detail.php", { params: param })
    }

    newProduct(name: string, price: number, disc: number, url: string, desc: string): Observable<any> {
        let body = new HttpParams()
        body = body.set('name', name)
        body = body.set('price', price.toString())
        body = body.set('disc', disc.toString())
        body = body.set('url', url)
        body = body.set('desc', desc)

        return this.http.post("http://localhost/Hybrid%20Mobile%20Programming/ionicangular/addproduct.php", body);
    }

    constructor(private http: HttpClient) { }
}
