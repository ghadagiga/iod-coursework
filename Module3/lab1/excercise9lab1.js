let dog1 = 'Bingo';
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let moresports=teamSports;
moresports.push='Basketball';
moresports.unshift='Football';
let dog2=dog1;
dog1='baby'
let cat2=cat1;
cat2.name='laly';
function sportoffer(mysports=[]){
for(let k in mysports)
console.log(mysports[k]);
}
console.log(dog1);
console.log(cat1);
sportoffer(teamSports);
sportoffer(moresports);
/* other way updating without affecting the origional one by shallow colne*/
let teamSport = ['Hockey', 'Cricket', 'Volleyball'];
let cat11 = { name: 'Fluffy', breed: 'Siberian' };
let moresport={...teamSport,[3]:'Basball',[4]:'Soccor'};
let cat22={...cat11,name:"Possy"};
console.log(cat11.name);
sportoffer(teamSport);
sportoffer(moresport);
