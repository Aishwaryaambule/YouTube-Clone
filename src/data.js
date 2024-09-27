export const API_KEY='AIzaSyDiA32yOL2t56KJAKSQNR6kd7G5rk-bO1Y';

  export const value_converter = (value) =>{
  if(value>=1000000)
  {
    return Math.floor(value/1000000) + "M";
  }
  else if(value>=1000){
    return  Math.floor(value/1000) + "K";
  }
  else{
    return value;
  }
}