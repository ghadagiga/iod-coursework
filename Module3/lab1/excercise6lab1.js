const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastname:'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastname}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    if(person.numFingers===6){
    return '\nYou killed my father. Prepare to die.'; 
    }
   return'Nice to meet you.';
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)
    inigo.getCatchPhrase(westley)
    inigo.getCatchPhrase(rugen)