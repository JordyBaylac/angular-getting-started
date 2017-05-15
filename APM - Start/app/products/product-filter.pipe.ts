import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[]{
    if(filterBy){
      filterBy = filterBy.toLocaleLowerCase();
      return value.filter((p: IProduct) => p.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
    return value;
  }

}