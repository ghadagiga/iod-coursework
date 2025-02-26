const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const courses=['java script','python','java script'];

function unique(duplicatesArray){
    const uniqueSet = new Set(duplicatesArray);
    return(console.log(uniqueSet)) ;
}
console.log(unique(colors)) ;
console.log(unique(testScores));
console.log(unique(courses));