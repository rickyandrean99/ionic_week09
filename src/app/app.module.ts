import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TglhariiniComponent } from './tglhariini/tglhariini.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { CegahcovidComponent } from './cegahcovid/cegahcovid.component';
import { ProductService } from './product.service'
import { Routes, RouterModule } from '@angular/router'
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const appRoutes: Routes = [
    {path:'product', component: ProductComponent},
    {path:'detail/:id', component: ProductdetailComponent},
    {path:'covid', component: CegahcovidComponent},
    {path:'movielist', component: MovielistComponent},
    {path:'moviedetail/:id', component: MoviedetailComponent}
]

@NgModule({
  declarations: [AppComponent, TglhariiniComponent, ProductComponent, CegahcovidComponent, ProductdetailComponent, MovielistComponent, MoviedetailComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
