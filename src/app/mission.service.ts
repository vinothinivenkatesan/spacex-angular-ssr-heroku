import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getMissions(url){
    return this.http.get(url)
      .pipe(
        map(mission =>mission),
        catchError(this.handleError('getMissions', []))
      );
  }

  private handleError<T>(operation, result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("Method fails"+operation+"with error"+error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
