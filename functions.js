function countNumbers(stringWithNumbers){
    const positions = new Array(10);
    for(i = 0; i < positions.length; i++){
        //create a regular expression with the number of iterator, the second parameter 'gi' is to search for all the results (g is to uppercase and i is to lowercase)
        let regularExpression = new RegExp(i, 'gi');
        //using the regular expression to match a number in a string passed like an argument on function.
        positions[i] = stringWithNumbers.match(regularExpression).length;
    }
    return positions;
}

//Example of Execution
const numbers = '00w1122333sk4fu4556677o77889hj99l9900'
countNumbers(numbers);
