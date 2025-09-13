import {Injectable} from "@angular/core";
import { EcHttpClient } from "../shared/http-client.service";
import { api } from "../constants/api";
import { Observable } from "rxjs";

@Injectable({
    'providedIn' : 'root',
})


export class OrdersService
{

    constructor(private _httpClient: EcHttpClient)
    {

    }

    fetchOrders(params: {}): Observable<any>
    {
        return this._httpClient.get(api.fetchOrders);
    }

    cancelOrder(params: {}): Observable<any>
    {
        return this._httpClient.post(api.cancelOrder,params);
    }
}