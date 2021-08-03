
const isOddOrEven = (req , res ) => {
    let evenNumbers = [];
    let oddNumbers = [];
    const numbers = req.body.numbers;
    try {
        numbers.forEach(number => {
            if (isNaN(number)) {
                throw "error"
            }
            if (parseInt(number) % 2 === 0) {
                evenNumbers.push(parseInt(number));
            } else {
                oddNumbers.push(parseInt(number));
            }
        });
        res.send({
            "is_success": true,
            "user_id": "rohitdutt_parsai_25012001",
            "even": evenNumbers,
            "odd": oddNumbers
        });
    }catch (e) {
        res.send({
            "is_success": false,
            "user_id": "rohitdutt_parsai_25012001",
        })
    }
}

module.exports = isOddOrEven;
