import {Injectable} from "@angular/core";
import { EcHttpClient } from "../shared/http-client.service";
import { api } from "../constants/api";
import { Observable } from "rxjs";

@Injectable({
    'providedIn' : 'root',
})


export class ProductsService
{

    constructor(private _httpClient: EcHttpClient)
    {

    }

    fetchProducts(params: {}): Observable<any>
    {
        return this._httpClient.get(api.fetchProducts);

    }

    addToCart(params: {}): Observable<any>
    {
        return this._httpClient.post(api.addToCart,params);
    }
}