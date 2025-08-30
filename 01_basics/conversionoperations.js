let score = '33abd'

//console.log(typeof score)


let valueInNumber = Number(score)
//console.log(typeof valueInNumber ) // output will be number but it is not pure nuber but js has converted it
//console.log( valueInNumber ) // Nan will be the output because the score is 33abd which is not the pure number

// "33" => 33
// " 33abd" => NaN 
// true => 1 , False => 0

let IsLoggedin = 1

let booleanIsLoggedIn = Boolean(IsLoggedin)
console.log(booleanIsLoggedIn);

// 1=> TRUE , 0=> FALSE , " " => FALSE , "ADITYA " => TRUE

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)