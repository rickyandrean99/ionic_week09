import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { LoginService } from '../app/login.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    username = "Ricky"
    judul = "Ionic-Angular Week 9"

    user_id = '' // id dari user X di database
    login_user = '' // username
    login_passwd = '' // password
    login_error = ''

    login() {
        this.ls.login(this.login_user, this.login_passwd).subscribe(
            (data) => {
                if (data.result == 'success') {
                    this.user_id = data.user_id // simpan user_id berupa id yang didapatkan dari API
                    this.storage.set('user_id', this.user_id) // simpan id tersebut pada local storage
                } else {
                    this.login_error = "Username atau Password Salah!"
                }   
            }
        )
    }

    logout() {
        this.storage.remove('user_id')
        window.location.replace("/") // redirect ke main dan tampilkan login
    }

    constructor(private storage: Storage, public ls: LoginService) { }

    async ngOnInit() {
        await this.storage.create();
        this.user_id = await this.storage.get('user_id')
    }
}
