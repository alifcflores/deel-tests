function countNumbers(stringWithNumbers){
    const positions = new Array(10);
    for(i = 0; i < positions.length; i++){
        let regularExpression = new RegExp(i, 'gi');
        positions[i] = stringWithNumbers.match(regularExpression).length;
    }
    return positions;
}

//Example of Execution
const numbers = '00w1122333sk4fu4556677o77889hj99l9900'
countNumbers(numbers);
