const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
const todayinmin=today.getMinutes()
console.log('The total minutes for today are ',todayinmin)
const todayinsec=today.getSeconds()
console.log('The total seconds for today are ',todayinsec)
const bd=new Date('1979-12-06')
console.log(bd)
let years=today.getFullYear()-bd.getFullYear()
let months=bd.getMonth()
let days=bd.getDay()
console.log("I'm",years,"years",months,"months and",days,"days")
function daysInBetween(date1, date2){
let daysbetween=new Date(date1-date2)
let daysbetweens=daysbetween.getDay()
return(daysbetweens)
}
let d1=new Date('2024-10-22')
let d2=new Date('2024-4-15')
let diff=daysInBetween(d1,d2)
console.log(diff)