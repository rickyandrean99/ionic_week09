import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    login(user_name: string, user_password: string): Observable<any> {
        let param = new HttpParams().append('user_name', user_name).append('user_password', user_password)
        return this.http.get("http://ubaya.fun/hybrid/160419076/product_api/login.php", { params: param })
    }

    constructor(private http: HttpClient) { }
}
