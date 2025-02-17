function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.writing=()=>{
        console.log(this.name,this.age,this.human)
        }
this.canDrive=()=>{
    return this.age>=18;
}
    }
    let person1=new Person('Juon','30',true);
    let person2=new Person('Carolyn','50',true);
    let v1='Carolyn';
    let v2='50';
    let v3=true;
person1.writing();
person2.writing();
console.log(person1.canDrive());
class PersonClass{
constructor(first,age,human){
    this.first=first;
    this.age=age;
    this.human=human;
}
    writing(){
        console.log(this.first,this.age,this.human);
    }
    canDrive(){
return(this.age>=18)
    }
}
let person3=new PersonClass('Jack','45',true);
person3.writing();
console.log(person2.canDrive());