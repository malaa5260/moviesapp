import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}
  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(
      `${environment.trendingUrl}/${mediaType}/${environment.apiTrending}`
    );
  }
 getMovieDetails(id: string): Observable<any>{
   return this._HttpClient.get(`${environment.movieUrl}${id}?${environment.apiMovie}`)
 }
 
}
