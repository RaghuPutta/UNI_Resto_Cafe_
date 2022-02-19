import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestCallService {

  constructor(private http: HttpClient) { }

  getDishCategories(){
    return this.http.get<any>("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad").toPromise()
  }
}
