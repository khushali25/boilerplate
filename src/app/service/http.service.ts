import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  apiUrl = "";
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  post(Url: any, Data: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.apiUrl}${Url}`, Data)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res);
          },
          (err) => {
            reject(err);
            return;
          }
        );
    });
  }
  get(Url: any) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.apiUrl}${Url}`)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res);
          },
          (err) => {
            reject(err);
            return;
          }
        );
    });
  }
}
