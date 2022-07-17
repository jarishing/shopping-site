import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token",
    }),
  };

  rooturl = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }

  //items
  getAllItem(): Observable<any> {
    return this.http.get<any>(
      this.rooturl + "/items/",
      this.httpOptions
    );
  };

  getSpecificItem(id): Observable<any> {
    return this.http.get<any>(
      this.rooturl + "/items/" + id + "/",
      this.httpOptions
    );
  };

  putUpdateItem(body, id):Observable<any> {
    return this.http.put<any>(
      this.rooturl + "/items/" + id + "/",
      body,
      this.httpOptions
    );
  };

  //user
  login(body):Observable<any> {
    return this.http.post<any>(
      this.rooturl + "/api-auth/",
      body,
      this.httpOptions
    )
  };

  //order
  getAllOrder(): Observable<any> {
    return this.http.get<any>(
      this.rooturl + "/order/",
      this.httpOptions
    );
  };

  postCreateOrder(body) :Observable<any> {
    return this.http.post<any>(
      this.rooturl + "/order/",
      body,
      this.httpOptions
    );
  };
}
