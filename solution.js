function solution(numbers) {
    let result = []
    for(let i=0;i<numbers.length;i++) {
        let num=numbers[i]
        if(num <0) {
            num = -1
        } else {
            for(let j=0;j<num;j++) {
                if(numbers[i + j + 1] <0) {
                    num=i + j + 1
                } 
            }
        }
                    result.push(num)
    }
    return result;
}

module.exports = { solution };
