import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GamesResponse, Games } from '../interfaces/games.interface';
import { GamesDetails } from '../interfaces/gamesDetails.interace';

const Base_URL_R = environment.Base_URL_Rawg
const Key_R = environment.Key_Rawg


interface Options{
    page?: number;
    dates?: string;
    inverse: string;
    ordering?: string
}
// &page=1&dates=2025-04-25,2025-05-01&-ordering=rating


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  private httpclient = inject(HttpClient)
  
  getGames(options: Options): Observable<GamesResponse> {
    const {page = 1, dates = ' ', inverse = '', ordering='' } = options

    return this.httpclient.get<GamesResponse>( `${Base_URL_R}games?key=${Key_R}`,{

      params:{
        page,
        dates,
        ordering: inverse ? `-${ordering}` : `${ordering}`
      }

    })
    // .pipe(
    //   tap( result => console.log("hereeeeeeee", result.results))
    // )
  }


  getGameBySlug(Slug: string ): Observable<GamesDetails> {
      

    return this.httpclient.get<GamesDetails>(`${Base_URL_R}games/${Slug}?key=${Key_R}`)
                // .pipe(
                //     tap( result => console.log(result)),
                //     // delay(2000),
                //     tap( resp => this.productCache.set(key, resp) )
                // )
  }
  
}
