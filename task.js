// Solution:
function vaxTrail(people) {
  const A = [];
  const B = [];
  const C = [];
  const D = [];

  for (let person of people) {
    if (person.temperature < 100) {
      if (person.age >= 20 && person.age <= 30) {
        A.push(person);
      } else if (person.age >= 31 && person.age <= 40) {
        B.push(person);
      } else if (person.age >= 41 && person.age <= 50) {
        C.push(person);
      }
    } else {
      D.push(person);
    }
  }

  A.sort((a, b) => (a.age % 2) - (b.age % 2));
  B.sort((a, b) => (a.age % 2) - (b.age % 2));
  C.sort((a, b) => (a.age % 2) - (b.age % 2));
  D.sort((a, b) => (a.age % 2) - (b.age % 2));

  return { A, B, C, D };
}

const people = [
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
];

const result = vaxTrail(people);

console.log(result);
