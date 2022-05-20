let myAge = 29;
let z = myAge + 5;
console.log("hello, I am "+myAge+" and in 5 years I will be "+z+".");
let num1 = 5
let num2 = 11
sum = num1 + num2
console.log("the sum of "+num1+" and "+num2+ " is " +sum)
let myName = "Clayton"
console.log("greetings, " +myName)
let x = 21
let y = 3
z = x / y
console.log("the remainder of " +x+ " divided by " +y+ " is " +z)
x = [5, 8]
y = [3, 6]
function DistanceForumla(x,y) {
    let xDiff = x[1]+y[1]
    let yDiff = x[0]+y[0]
    let tDiff = xDiff*xDiff + yDiff*yDiff
    return (Math.sqrt(tDiff)) 
}
console.log(DistanceForumla(x,y))