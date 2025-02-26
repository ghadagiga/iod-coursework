const animals = ['Tiger', 'Giraffe']
console.log(animals);
animals.push("Lion","Horse");
console.log(animals);
animals.unshift("Dog","Cat");
console.log(animals);
const sortanimals =animals.sort();
console.log(animals);
function replaceMiddleAnimal(newValue){
 let long=animals.length
 let  newplacment=long/2;
 console.log(animals);
 console.log("the middle of array is ",newplacment);
 animals[newplacment]=newValue;
}
replaceMiddleAnimal('Alagator');
console.log(animals);
function findMatchingAnimals(beginsWith){
let beginsWith1=beginsWith.toUppercase();
let beginsWith2=beginsWith.toLowercase();
    let Iget1=animals.find('beginWith1');
    let Iget2=animals.find('beginWith2');
    if(Iget1||Iget2)
    console.log(beginsWith);

}
findMatchingAnimals('dog');