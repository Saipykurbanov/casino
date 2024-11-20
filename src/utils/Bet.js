const Bet = {}

Bet.onChange = (value, callback) => {
    let result = value.replace(/[^0-9.]/g, '').replace('.', '').replace(/\./g,'').replace('x','.');
    return callback(result)
  
}

Bet.plus = (value, callback) => {
    return callback(prev => prev + value)
}

Bet.multiply = (callback) => {
    return callback(prev => prev * 2)
}

Bet.minus = (value, callback) => {
    return callback(prev => {
        let result = prev - value
        if(result < 0) {
            return 0
        } else {
            return result
        }
    })
}

Bet.divide = (callback) => {
    return callback(prev => {
        let result = prev / 2
        if(result < 0.01) {
            return 0
        } else {
            return result
        }
    })
}

export default Bet;