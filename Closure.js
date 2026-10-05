
function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

console.log(sum([2, 3, 4, 5])); 
console.log(sum([2, 3, 4, 5]));


console.log("Exercice 1-:Build a Safer account (15min)___________")
function makeAccount(initial){
 var balance = initial;
 function account(amount)
{
    if(balance - amount >= 0){
        balance = balance - amount;
        return"hereHere's your money: $"+ amount;
}
return "Insufficient funds."
}
return account;
}
const account = makeAccount(100);
console.log(account(50));
console.log(account(60));
console.log("Exercice 2: Counter with Closure(new)(15min)___________")
function makeCounter(start){
var  counter=start;
return function ABC()
{counter++;
        return counter;
}
}
const counter = makeCounter(0);

console.log(counter(15))
console.log(counter(16))
console.log(counter(41))
const a = makeCounter(10);
const b = makeCounter(0);
console.log(a());
console.log(a());
console.log(b()); 
console.log(a()); 
console.log(b()); 
console.log("Why does each counter keep its own state?")
console.log("Each counter Holds its own parameters and variables so they are all different then each other ")


console.log("Exercice 3: Bonus API Counter___________")
function makeSmartCounter(start) {
    var counter = start;
      function increment() {  
     counter++;
        return counter;
    }
     function decrement() {
            counter--;
            return counter;
        }
        function value(){
            return counter
        }
        function reset(){
            counter=start
            return "Counter has been resetted"
        }
        return {
            increment,
            decrement,
            value,
            reset
        };
    }
  const c = makeSmartCounter(5);
console.log(c.increment()); // 6
console.log(c.increment()); // 7
console.log(c.decrement()); // 6
console.log(c.value());     // 6
console.log(c.reset());     // 5
    