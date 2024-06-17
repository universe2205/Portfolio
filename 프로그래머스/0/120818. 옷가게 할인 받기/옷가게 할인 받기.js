function solution(price) {
    var answer = 0;
    let discountRate = 0;

    if (price >= 500000){
        discountRate = 0.20;
    } else if (price >= 300000) {
        discountRate = 0.10;
    } else if (price >= 100000) {
        discountRate = 0.05;
    } else if (price) {
        answer = price;
    }
    answer = price * (1 - discountRate);
    return Math.floor(answer);
}