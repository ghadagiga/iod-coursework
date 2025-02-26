function camelCase(cssProp){
let newer=cssProp.split('-');
console.log(newer);
let spart=newer[1];

updated=(newer[0]+spart);
console.log(updated);
}
camelCase('margin-left');