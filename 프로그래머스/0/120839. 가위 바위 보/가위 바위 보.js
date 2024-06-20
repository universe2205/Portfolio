function solution(rsp) {
  let answer = '';
  let rock, sci, paper;
  [rock, sci, paper] = ['0', '2', '5'];
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === rock) {
      answer += paper;
    } else if (rsp[i] === sci) {
      answer += rock;
    } else if (rsp[i] === paper) {
      answer += sci;
    } else {
      pass;
    }
  }
  return answer;
}