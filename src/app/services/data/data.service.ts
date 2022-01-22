import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {

  abstract findLastValues(): Observable<any>;
  abstract findAllValuesByElement(id : String) : Observable<any>;
  abstract findElementValueByDate(id: String, date: String) : Observable<any>;
}
