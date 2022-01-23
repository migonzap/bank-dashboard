export default class Utils {

  // Returns the min value from an array
  static min(values: number[]) {
    return Utils.round(Math.min(...values));
  }

  // Returns the max value from an array
  static max(values: number[]) {
    return Utils.round(Math.max(...values));
  }

  // Returns the avg value of a numeric array
  static avg(values: number[]) {
    if(values.length == 0) return 0;

    var sum = 0;
    for( var i = 0; i < values.length; i++ ){
      sum += values[i];
    }

    return Utils.round(sum / values.length);
  }

  static formatUnit(unit: string) {
    return unit == 'porcentual' ? '%' : unit;
  }

  // Rounds at most 2 decimal places if necessary
  static round(value: number) {
     return Math.round((value + Number.EPSILON) * 100) / 100
  }


}
