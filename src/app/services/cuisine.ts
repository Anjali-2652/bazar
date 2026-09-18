import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Cuisine {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
  // private apiKey = 'qrHfBREroVl2cDG1vIddMMia4yMnS5MRy0atfBYO'

  constructor(private http: HttpClient){}

  // private getHeaders() : HttpHeaders{
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-Api-Key': this.apiKey
  //   });
  // }

  getRecipe(serachTerm: string): Observable<any[]>{
    // const headers = this.getHeaders();

    const params = new HttpParams().set('s', serachTerm);
    return this.http.get<any>(this.apiUrl, {params}).pipe(map(response => response.meals || []));
  }

}
