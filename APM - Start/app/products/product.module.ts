import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StarComponent } from '../shared/star.component';

@NgModule({
    imports: [
        // CommonModule,  //!> importa esto para Commons directives, like ngFor and ngIf
        // FormsModule,   //!> se usa para ngModel and two-way-bindings
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
        ]),
        SharedModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule{

}