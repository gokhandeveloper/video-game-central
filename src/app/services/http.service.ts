import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, forkJoin} from "rxjs";
import {environment} from "../../environments/environment";
import {APIResponse, Game} from "../models/models";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search? : string

  ): Observable<APIResponse<Game>> {
    let params =new HttpParams()
      .set('ordering', ordering);
    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);

    }
    return this.http.get<APIResponse<Game>>(`${environment.BASE_URL}/games`, {
      params: params
    });
  }

  getGameDetails(id: string):Observable<Game> {
    const gameInfoRequest =  this.http.get(`${environment.BASE_URL}/games/${id}`);
    return forkJoin( {
      gameInfoRequest
    }).pipe (
      map((response: any) =>{
        return {
          ...response['gameInfoRequest']
        }
    })
    )

  }
}
