import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SConexionService {

  constructor(public http: HttpClient) { }

  public getData(url: string) {
    return this.http.get(url);
  
}


  public postData(url: string, json: any,header: HttpHeaders) {
    return this.http.post(url, json, { 'headers': header }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
      alert('Perdida de conexion');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      
      console.error('Backend returned code \nServer Response Status '+error.status +'\nError Message '+ error.message);
      alert('Error de estructura de Respuesta o datos enviados');
    }
      // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later');
  }

}
