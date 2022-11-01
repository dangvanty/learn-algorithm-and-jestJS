// Câu 1: cho bảng m x n số, trong đó tài khoản [i][j] là tiền của khách hàng j trả ra người giàu nhất: 
// input accounts = [[7,1,3], [2,8,7],[1,9,5]] 
// ouput : 17
//---------
exports.wealth = (accounts)=>{
    let maxMoney = 0
    for(let account of accounts){
        let moneyOfAccount = 0
        for(let money of account){
            moneyOfAccount += money
        }
        maxMoney = Math.max(maxMoney, moneyOfAccount)
    }
    return maxMoney 
}

// ---------
// Câu 2: cho số nguyên trả lại 1 mảng với điều kiện 
// input accounts = [[7,1,3], [2,8,7],[1,9,5]] 
// ouput : 17

