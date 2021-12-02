import { Injectable } from '@angular/core';
import { Comments } from '../interfaces/comments.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '32n873n2148723n482n4216498n7'
    })
  }

  apiUrl = environment.backendApi;

  constructor(private http: HttpClient) {
  }

  getComments() {
    return this.http.get<Comments[]>(`${this.apiUrl}/comments`);
  }

  postComment(commentObj : Comments) {
    return this.http.post<Comments>(`${this.apiUrl}/comments`, commentObj, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
