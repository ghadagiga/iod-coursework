let s = "This text will be truncated if it is too long";
let letters = s.length;
    truncate=(letters)=> {
    if(letters>25){
      console.log("hello");
      let st= (s.substring(25));
      console.log(st+"...");
  }
else
    console.log("here is the statment",s);
  }
