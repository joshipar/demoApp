import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsresolverService implements Resolve<any> {

  resolve(route:ActivatedRouteSnapshot):Observable<any>{
     console.log("route of resolves",route)
    return this.product.getProducts().pipe(
      catchError(error=>{
            return  of('no data')
      }
      )
      )
  }

  constructor(private product:ProductService) { }
}
