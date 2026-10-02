/*

  logical and (&&) :- Both condition are True 
        true && true = true
        true && false = false
        false && true = false
        false && fasle = false

  logical or (||)  :-  atleast one condition true then return ture and both are false return fasle
        true || true = true
        true || fasle = true
        false || true = true
        fasle || false  = false


  logical  Not (!)

  true => return its fasle
  fasle => return its ture

  



*/

console.log(!true);
let logidin=true
if(!logidin){
    console.log("Please login First");
    
}