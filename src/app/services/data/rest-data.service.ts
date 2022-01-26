import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class RestDataService extends DataService implements OnInit {

  static readonly LAST_VALUES_URL = "http://indecon.site/last";
  static readonly ALL_VALUES_BY_ELEMENT_URL = "http://indecon.site/values/";
  static readonly ELEMENT_VALUE_BY_DATE_URL = "http://indecon.site/date/";

  httpHeader = {
    headers: new HttpHeaders({})
  };

  constructor(private httpClient: HttpClient) {
    super();
  }

  findLastValues() {
    return this.httpClient
      .get(RestDataService.LAST_VALUES_URL, this.httpHeader)
      .pipe(catchError(this.handleError))
  }

  findAllValuesByElement(key: string) {
    return this.httpClient
      .get(RestDataService.ALL_VALUES_BY_ELEMENT_URL + '/' + key, this.httpHeader)
      .pipe(catchError(this.handleError))
  }

  findElementValueByDate(key: string, date: string) {
    return this.httpClient
      .get(RestDataService.ELEMENT_VALUE_BY_DATE_URL + '/' + key + '/' + date, this.httpHeader)
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  ngOnInit(): void {

  }
}
