import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy{

    pageTitle: string = 'Product Detail';
    errorMessage: string;
    private sub: Subscription;

    // @Input()
    product: IProduct;

    constructor(private _route: Router, 
                private _activeRoute: ActivatedRoute, 
                private _productService: ProductService){
    }

    ngOnInit(): void{

        this.sub = this._activeRoute.params.subscribe(
            params => {
                let id = +params['id'];
                this.pageTitle += `: ${id}`;
                this.loadProduct(id);
        });

        // let id = this._activeRoute.snapshot.params['id'];
        
        // this._productService.getProductById(id)
        // .then( prod => this.product = prod ,
        //         err => console.log(err));

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadProduct(id: number): void{
        this._productService.getProductById(id).subscribe(
                    product => this.product = product,
                    error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._route.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

}