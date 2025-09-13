import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    'providedIn' : 'root'
})

export class EcHttpClient
{
    
    constructor(private _httpClient: HttpClient)
    {

    }

    public get(url: string): Observable<any>
    {
        let headers = new HttpHeaders();
        // this._loggerService.logger(url);
        headers = headers.set('Authorization',"Bearer "+localStorage.getItem('token'));
        // headers = headers.set('lang',sessionStorage.getItem('lang'));
        // headers = headers.set('db',sessionStorage.getItem('db'));
        // headers = headers.set('startPeriod',sessionStorage.getItem('startPeriod'));
        // headers = headers.set('endPeriod',sessionStorage.getItem('endPeriod'));
        // headers = headers.set('companyId',sessionStorage.getItem('companyId'));
        // headers = headers.set('periodId',sessionStorage.getItem('periodId'));
        return this._httpClient.get(url,{headers : headers});
    }




    public post(url: string,body : {}): Observable<any>
    {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization',"Bearer "+localStorage.getItem('token'));
        // this._loggerService.logger(url);
        // headers = headers.set('Authorization',sessionStorage.getItem('Authorization'));
        // headers = headers.set('lang',sessionStorage.getItem('lang'));
        // headers = headers.set('db',sessionStorage.getItem('db'));
        // headers = headers.set('startPeriod',sessionStorage.getItem('startPeriod'));
        // headers = headers.set('endPeriod',sessionStorage.getItem('endPeriod'));
        // headers = headers.set('companyId',sessionStorage.getItem('companyId'));
        // headers = headers.set('periodId',sessionStorage.getItem('periodId'));
        console.log(url);
        return this._httpClient.post(url,body,{headers : headers});
    }

    public postWithoutHeaders(url: string,body: {}): Observable<any>
    {
        let headers = new HttpHeaders();
        // this._loggerService.logger(url);
        // if(sessionStorage.getItem('db'))
        // {
        //     headers = headers.set('lang',sessionStorage.getItem('lang'));
        //     headers = headers.set('db',sessionStorage.getItem('db'));
        //     headers = headers.set('startPeriod',sessionStorage.getItem('startPeriod'));
        //     headers = headers.set('endPeriod',sessionStorage.getItem('endPeriod'));
        //     headers = headers.set('companyId',sessionStorage.getItem('companyId'));
        //     headers = headers.set('periodId',sessionStorage.getItem('periodId'));
        // }

        return this._httpClient.post(url,body,{headers : headers});
    }

    public getWithoutHeader(url: string): Observable<any>
    {
        // this._loggerService.logger(url);
        return this._httpClient.get(url);
    }

    public put(url: string,body: {}): Observable<any>
    {
        let headers = new HttpHeaders();
        // this._loggerService.logger(url);
        // headers = headers.set('Authorization',sessionStorage.getItem('Authorization'));
        // headers = headers.set('lang',sessionStorage.getItem('lang'));
        // headers = headers.set('db',sessionStorage.getItem('db'));
        // headers = headers.set('startPeriod',sessionStorage.getItem('startPeriod'));
        // headers = headers.set('endPeriod',sessionStorage.getItem('endPeriod'));
        // headers = headers.set('companyId',sessionStorage.getItem('companyId'));
        // headers = headers.set('periodId',sessionStorage.getItem('periodId'));
        return this._httpClient.put(url,body,{headers : headers});
    }

    public delete(url:string): Observable<any>
    {
        let headers = new HttpHeaders();
        // this._loggerService.logger(url);
        // headers = headers.set('Authorization',sessionStorage.getItem('Authorization'));
        // headers = headers.set('lang',sessionStorage.getItem('lang'));
        // headers = headers.set('db',sessionStorage.getItem('db'));
        // headers = headers.set('startPeriod',sessionStorage.getItem('startPeriod'));
        // headers = headers.set('endPeriod',sessionStorage.getItem('endPeriod'));
        // headers = headers.set('companyId',sessionStorage.getItem('companyId'));
        // headers = headers.set('periodId',sessionStorage.getItem('periodId'));
        return this._httpClient.delete(url,{headers : headers});
    }

    public putWithoutHeaders(url:string,body : {}): Observable<any>
    {
        // this._loggerService.logger(url);
        return this._httpClient.put(url,body);
    }
}

