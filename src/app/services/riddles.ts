import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Riddles {
  private apiUrl = 'https://api.api-ninjas.com/v1/riddles';
  private apiKey = ' qrHfBREroVl2cDG1vIddMMia4yMnS5MRy0atfBYO'

  constructor(private http: HttpClient){}

  private getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-Api-Key' : this.apiKey
    });
  }
  getRiddles():Observable<any>{
    return this.http.get<any>(this.apiUrl, {headers:this.getHeaders()}).subscribe({
      next:(resData)=>{
        console.log(resData)
      }
    });
  }
}
