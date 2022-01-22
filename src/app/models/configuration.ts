import { Element } from "./element";

export interface  Configuration {
  lastValuesUrl : string,
  allValuesByElementUrl : string,
  elementValueByDateUrl : string,
  elements : Element[]
}
