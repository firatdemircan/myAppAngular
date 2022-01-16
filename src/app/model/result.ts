export interface Result<T> {

  status:boolean;
  message:String;
  data? : T;
}
