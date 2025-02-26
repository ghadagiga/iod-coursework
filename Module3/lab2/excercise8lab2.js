//a)
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
const phoneBookDEF=new Map()
phoneBookDEF.set('David','0444444897')
phoneBookDEF.set('Eduard','0477777777')
phoneBookDEF.set('Florence','0456333337')
//b)
const PhoneBookDEFObject= Object.fromEntries(phoneBookDEF)
//console.log(PhoneBookDEFObject);
// c)
phoneBookABC.set('Caroline','0455555555')
console.log(phoneBookABC)
// (d
const printPhoneBook=(contacts)=>{
    const ContactsObjects= Object.fromEntries(contacts)
console.log(ContactsObjects);
}
printPhoneBook(phoneBookABC)
printPhoneBook(phoneBookDEF)
// e)
const phoneBook=new Map(phoneBookABC,phoneBookDEF)
// f)
console.log (Object.entries(phoneBook))