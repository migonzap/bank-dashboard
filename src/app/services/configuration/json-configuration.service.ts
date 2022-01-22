import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "./configuration.service";
import { Configuration } from "../../models/configuration";
import {Injectable} from "@angular/core";

export const CONFIGURATION_FILE_PATH = './assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class JsonConfigurationService extends ConfigurationService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getConfiguration() {
    return this.httpClient.get<Configuration>(CONFIGURATION_FILE_PATH);
  }
}
