import {Injectable} from "@angular/core";
import { EcHttpClient } from "../shared/http-client.service";
import { api } from "../constants/api";
import { Observable } from "rxjs";

@Injectable({
    'providedIn' : 'root',
})


export class MyCartDetailService
{

    constructor(private _httpClient: EcHttpClient)
    {

    }

    fetchUserCart(params: {}): Observable<any>
    {
        return this._httpClient.get(api.fetchUserCart);
    }

    changeUserProductQty(params: {}): Observable<any>
    {
        return this._httpClient.post(api.changeUserProductQty,params);
    }

    createOrder(params: {}): Observable<any>
    {
        return this._httpClient.post(api.createOrder,params);
    }
}