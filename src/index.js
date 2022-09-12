const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("Please enter a number");
} else if (age < 18) {
  console.log("You are very young");
} else if (age >= 18 && age <= 30) {
  /* &&는 AND이라는 뜻이다. 둘 다 true여야만 true를 출력한다.*/
  console.log("drink a lot!!");
} else if (age > 30 || age < 80) {
  /* ||는 or이라는 뜻이다. 둘중 하나만 true여도 true를 출력한다.*/
  console.log("abstinence");
}

/*
true || true === true
true || false === true
false || true=== true
false || false=== false

true && true === true
true && false === false
false && true === false
false && false === false
*/
