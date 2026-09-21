import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class City {
  private apiUrl = "https://api.api-ninjas.com/v1/city";
  private apiKey = "qrHfBREroVl2cDG1vIddMMia4yMnS5MRy0atfBYO"

  constructor(private http: HttpClient){}

  getCityData(cityName: string): Observable<any>{
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);

    const params = {'name': cityName.trim()}
    return this.http.get<any>(`${this.apiUrl}? name = ${cityName}`, {headers, params});
  }

}
