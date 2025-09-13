import {Injectable} from "@angular/core";
import { EcHttpClient } from "../shared/http-client.service";
import { api } from "../constants/api";
import { Observable } from "rxjs";

@Injectable({
    'providedIn' : 'root',
})


export class LoginService
{

    constructor(private _httpClient: EcHttpClient)
    {

    }
    loginUser(params: {}): Observable<any>
    {
        return this._httpClient.post(api.login,params);
    }
}