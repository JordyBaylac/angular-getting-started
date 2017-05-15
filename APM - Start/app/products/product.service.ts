import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Http, Response } from '@angular/http';

import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private _productUrl = "api/products/products.json";

    constructor(private _http: Http){
        
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                            .map((response: Response) => <IProduct[]> response.json())
                            .do(data => console.log("All: "+JSON.stringify(data)))
                            .catch(this.handleError);
        
    }

    getProductById(id: number): Observable<IProduct> {

        // this.getProducts().find(product => product.productId == id)

        return this.getProducts()
            .map( (products: IProduct[]) => {
                return products.find(p => p.productId === id)
            });
        
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}