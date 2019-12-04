import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerdaService {

  constructor(private http: HttpClient  ) { }
  getCustomerData():Observable<any> {
    return this.http.get('assets/customerdata.json');
    }
}
