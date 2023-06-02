function getAge(age) {
  let userAge = age;
  const date = new Date();
  const birthDate = date.getFullYear() - userAge;
  return birthDate;
}

function test() {
  console.log("You Were born on : " + getAge(22));
}

test();
