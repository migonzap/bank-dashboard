import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Configuration } from "../../models/configuration";

@Injectable({
  providedIn: 'root'
})
export abstract class ConfigurationService {

  configuration?: Configuration;
  abstract getConfiguration(): Observable<Configuration>;

}
