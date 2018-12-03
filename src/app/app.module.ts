import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './products/category/category.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import {ProductsService} from './products/products.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ProductsComponent,
        AboutComponent,
        CategoryComponent,
        ProductDetailComponent,
        ProductItemComponent,
        NgxPaginationModule
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
