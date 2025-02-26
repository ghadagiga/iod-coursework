let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
 function sumSalaries(salaries){
    let TotalSalaries=0
    for (let [key, value] of Object.entries(salaries)) {
         TotalSalaries=TotalSalaries+value
    }
        return(TotalSalaries)
 
}
console.log('The Total Salaries Amount= ',sumSalaries(salaries))
function topEarner(salaries){
    let HiestOne=0
    for (let [key, value] of Object.entries(salaries)) {
    
     if(HiestOne<value)
        HiestOne=value
}
return(HiestOne)
}
let H=topEarner(salaries)
console.log('The Hiest Salary Amount is ',H)