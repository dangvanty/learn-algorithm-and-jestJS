// Câu 1: cho bảng m x n số, trong đó tài khoản [i][j] là tiền của khách hàng j trả ra người giàu nhất:
// input accounts = [[7,1,3], [2,8,7],[1,9,5]]
// ouput : 17
//---------
exports.cau1 = (accounts) => {
  let maxMoney = 0
  for (let account of accounts) {
    let moneyOfAccount = 0
    for (let money of account) {
      moneyOfAccount += money
    }
    maxMoney = Math.max(maxMoney, moneyOfAccount)
  }
  return maxMoney
}

// ---------
// Câu 2: cho số nguyên trả lại 1 mảng với điều kiện chia hết cho 3 thì 'fix' 
//chia hết cho 5 thì 'bug' chia hết cho 3 và 5 thì 'fixbug
// input number = 15
// ouput : [1,2,'fix',4,'bug','fix',7,8,'fix','bug',11,'fix',13,14,'fixbug']

exports.cau2 = (number)=>{
    let output = []
    for(let i =1 ; i<= number; i ++){
        let string=''
        let divisibleBy3 = i%3 === 0 
        let divisibleBy5 = i%5 === 0 
        if (divisibleBy3){
            string += 'fix'
        }
        if (divisibleBy5){
            string += 'bug'
        }
        if(string === ''){
            string =i
        }
        output[i-1]=string
    }
    return output
}