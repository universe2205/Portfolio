function solution(array) {
  var answer = 0;
  array.sort((a,b)=>{    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;});
  answer = Math.trunc(array.length / 2);
  return array[answer];
}